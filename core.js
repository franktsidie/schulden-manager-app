/* Pure ledger and backup rules. Amounts are calculated in integer cents. */
(function (root) {
  'use strict';
  const MAX = 100000000000;
  const clone = x => JSON.parse(JSON.stringify(x));
  const cents = x => Math.round((Number(x) + Number.EPSILON) * 100);
  function money(input, lang = 0) {
    const s = String(input ?? '').trim().replace(/[\u00a0\u202f ]/g, '');
    if (!s || !/^[0-9.,]+$/.test(s)) throw Error('amountError');
    let normalized;
    if (s.includes(',') && s.includes('.')) {
      const comma = s.lastIndexOf(',') > s.lastIndexOf('.');
      const re = comma ? /^\d{1,3}(?:\.\d{3})*,\d{1,2}$/ : /^\d{1,3}(?:,\d{3})*\.\d{1,2}$/;
      if (!re.test(s)) throw Error('amountError');
      normalized = comma ? s.replace(/\./g, '').replace(',', '.') : s.replace(/,/g, '');
    } else if (s.includes(',')) {
      if (lang === 1 && /^\d{1,3}(?:,\d{3})+$/.test(s)) normalized = s.replace(/,/g, '');
      else if (/^\d+,\d{1,2}$/.test(s)) normalized = s.replace(',', '.');
      else throw Error('amountError');
    } else if (s.includes('.')) {
      if (lang !== 1 && /^\d{1,3}(?:\.\d{3})+$/.test(s)) normalized = s.replace(/\./g, '');
      else if (/^\d+\.\d{1,2}$/.test(s)) normalized = s;
      else throw Error('amountError');
    } else normalized = s;
    const n = Math.round(Number(normalized) * 100);
    if (!Number.isSafeInteger(n) || n > MAX) throw Error('amountError');
    return n;
  }
  function date(s) {
    if (typeof s !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
    const d = new Date(s + 'T00:00:00Z');
    return Number.isFinite(+d) && d.toISOString().slice(0, 10) === s && +s.slice(0, 4) >= 1900;
  }
  const day = s => Date.parse(s + 'T00:00:00Z') / 86400000;
  function addMonths(s, months) {
    if (!date(s) || !Number.isInteger(months)) throw Error('dateError');
    const d = new Date(s + 'T00:00:00Z'), original = d.getUTCDate();
    d.setUTCDate(1); d.setUTCMonth(d.getUTCMonth() + months);
    const last = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0)).getUTCDate();
    d.setUTCDate(Math.min(original, last));
    return d.toISOString().slice(0, 10);
  }
  const balance = d => d.h.reduce((sum, e) => sum + (e.k === 'pay' ? -cents(e.a) : cents(e.a)), 0);
  const status = (d, today, soon) => balance(d) === 0 ? 'paid' : d.due < today ? 'over' : d.due <= soon ? 'due' : 'open';
  function validate(raw, legacy = false) {
    if (!raw || !Array.isArray(raw.people) || !Array.isArray(raw.debts) || raw.people.length > 10000 || raw.debts.length > 50000) throw Error('formatError');
    const ids = new Set(), debtIds = new Set();
    const text = (s, max = 2000) => typeof s === 'string' && s.length <= max;
    const validId = s => typeof s === 'string' && /^[a-zA-Z0-9_-]{1,100}$/.test(s);
    const amount = a => typeof a === 'number' && Number.isFinite(a) && a >= 0 && cents(a) <= MAX;
    const people = raw.people.map(p => {
      if (!p || !validId(p.id) || ids.has(p.id) || !text(p.name, 200) || !p.name.trim()) throw Error('formatError');
      ids.add(p.id); return { id: p.id, name: p.name.trim() };
    });
    const debts = raw.debts.map(d => {
      if (!d || !validId(d.id) || debtIds.has(d.id) || !ids.has(d.pid) || ![1, -1].includes(d.dir) || !text(d.purpose, 200) || !date(d.due) || !Array.isArray(d.h) || !d.h.length || d.h.length > 20000) throw Error('formatError');
      debtIds.add(d.id);
      const eventIds = new Set();
      const h = d.h.map((e, i) => {
        if (!e || !['init', 'pay', 'late', 'int'].includes(e.k) || (i === 0) !== (e.k === 'init') || !amount(e.a) || e.a <= 0 || !date(e.dt) || !text(e.n ?? '')) throw Error('formatError');
        if (e.ch && !['cash', 'pp', 'bank', 'combo'].includes(e.ch)) throw Error('formatError');
        if (e.ch === 'combo' && (!e.sp || !['cash','pp','bank'].every(k => amount(e.sp[k])) || cents(e.sp.cash)+cents(e.sp.pp)+cents(e.sp.bank) !== cents(e.a))) throw Error('formatError');
        if (e.r != null && (typeof e.r !== 'number' || !Number.isFinite(e.r) || (!legacy && (e.r < 0 || e.r > 100)))) throw Error('formatError');
        if (e.to && (!date(e.to) || !e.from || !date(e.from) || e.to < e.from || e.dt !== e.to || e.k !== 'int')) throw Error('formatError');
        const id = e.id || d.id + '-e' + i;
        if (!validId(id) || eventIds.has(id)) throw Error('formatError'); eventIds.add(id);
        return { id, k:e.k, a:cents(e.a)/100, dt:e.dt, n:e.n || '', ...(e.ch?{ch:e.ch}:{}), ...(e.sp?{sp:{cash:cents(e.sp.cash)/100,pp:cents(e.sp.pp)/100,bank:cents(e.sp.bank)/100}}:{}), ...(e.r!=null?{r:e.r}:{}), ...(e.to?{from:e.from,to:e.to}:{} ) };
      });
      if (!legacy && (d.due < h[0].dt || h.some(e => e.dt < h[0].dt))) throw Error('dateError');
      let running = 0;
      const ordered = h.map((e,i)=>({e,i})).sort((a,b)=>a.e.dt.localeCompare(b.e.dt)||a.i-b.i);
      for (const {e} of ordered) { running += (e.k==='pay'?-1:1)*cents(e.a); if (running < 0 && !legacy) throw Error('overpay'); }
      if (running < 0 && !legacy) throw Error('overpay');
      return {id:d.id,pid:d.pid,dir:d.dir,purpose:d.purpose,due:d.due,h};
    });
    return {people, debts, ts: typeof raw.ts==='number'&&Number.isFinite(raw.ts)?raw.ts:0};
  }
  // Simple annual interest, no compounding. Payments settle charges before principal.
  function interest(d, until) {
    if (!date(until)) throw Error('dateError');
    const rate = d.h[0].r || 0;
    const from = d.h.reduce((s,e)=>e.to&&e.to>s?e.to:s,d.h[0].dt);
    if (rate <= 0 || until <= from) return {amount:0,from,to:until};
    let principal=0,charges=0,total=0,at=from;
    const events=d.h.map((e,i)=>({e,i})).sort((a,b)=>a.e.dt.localeCompare(b.e.dt)||a.i-b.i);
    for (const {e} of events) {
      if(e.dt>until) break;
      if(e.dt>at) {total+=principal*(day(e.dt)-day(at));at=e.dt;}
      if(e.k==='init') principal+=cents(e.a);
      else if(e.k==='pay') {let pay=cents(e.a),used=Math.min(charges,pay);charges-=used;principal=Math.max(0,principal-(pay-used));}
      else charges+=cents(e.a);
    }
    total+=principal*(day(until)-day(at));
    return {amount:Math.round(total*rate/365/100),from,to:until};
  }
  const canonical = raw => {const v=validate(raw,true); return JSON.stringify({people:v.people,debts:v.debts});};
  const bytes64 = bytes => {let out='';for(let i=0;i<bytes.length;i+=8192)out+=String.fromCharCode(...bytes.subarray(i,i+8192));return btoa(out);};
  const un64 = s => Uint8Array.from(atob(s.replace(/\s/g,'')),c=>c.charCodeAt(0));
  const encoder = new TextEncoder();
  async function derive(password, salt) {
    const material=await crypto.subtle.importKey('raw',encoder.encode(password),'PBKDF2',false,['deriveKey']);
    return crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:150000,hash:'SHA-256'},material,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);
  }
  async function encrypt(text,password) {
    const s=crypto.getRandomValues(new Uint8Array(16)),iv=crypto.getRandomValues(new Uint8Array(12));
    const result=await crypto.subtle.encrypt({name:'AES-GCM',iv},await derive(password,s),encoder.encode(text));
    return {enc:1,s:bytes64(s),iv:bytes64(iv),d:bytes64(new Uint8Array(result))};
  }
  async function decrypt(value,password) {
    if(!value||value.enc!==1||typeof value.d!=='string'||value.d.length>40000000)throw Error('formatError');
    return new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:un64(value.iv)},await derive(password,un64(value.s)),un64(value.d)));
  }
  const api={clone,cents,money,date,day,addMonths,balance,status,validate,interest,canonical,bytes64,un64,encrypt,decrypt};
  if(typeof module!=='undefined')module.exports=api;
  root.Ledger=api;
})(typeof globalThis!=='undefined'?globalThis:this);
