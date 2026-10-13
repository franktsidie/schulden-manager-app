'use strict';
Object.assign(T, {
  edit:['Bearbeiten','Edit','Modifier'], remove:['Löschen','Delete','Supprimer'], cancel:['Abbrechen','Cancel','Annuler'],
  undo:['Letzte Änderung rückgängig','Undo last change','Annuler la dernière modification'],
  amountError:['Bitte einen gültigen Betrag mit höchstens zwei Nachkommastellen eingeben (z. B. 1.000,50).','Enter a valid amount with at most two decimals (e.g. 1,000.50).','Saisissez un montant valide avec deux décimales maximum (ex. 1 000,50).'],
  positive:['Der Betrag muss größer als null sein.','Amount must be greater than zero.','Le montant doit être positif.'],
  overpay:['Die Rückzahlung ist höher als der zu diesem Zeitpunkt offene Betrag.','Repayment exceeds the balance at that date.','Le remboursement dépasse le solde à cette date.'],
  dateError:['Bitte gültige Daten angeben. Frist und Buchungen dürfen nicht vor der ersten Auszahlung liegen.','Use valid dates. Due date and entries cannot precede the initial payment.','Dates invalides. Les écritures et l’échéance ne peuvent précéder le versement initial.'],
  nameError:['Bitte einen Namen angeben (höchstens 200 Zeichen).','Enter a name (200 characters maximum).','Indiquez un nom (200 caractères maximum).'],
  duplicate:['Diese Person existiert bereits. Bitte den vorhandenen Eintrag verwenden.','This person already exists. Use the existing entry.','Cette personne existe déjà. Utilisez l’entrée existante.'],
  formatError:['Ungültiges Backup. Es wurde nichts ersetzt.','Invalid backup. Nothing was replaced.','Sauvegarde invalide. Rien n’a été remplacé.'],
  storageError:['Speichern fehlgeschlagen. Deine Änderung wurde nicht übernommen. Bitte Speicherplatz und Browser-Einstellungen prüfen und ein Backup exportieren.','Saving failed. Your change was not applied. Check storage and browser settings and export a backup.','Échec de l’enregistrement. La modification n’a pas été appliquée. Vérifiez le stockage et exportez une sauvegarde.'],
  concurrent:['Die Daten wurden in einem anderen Fenster geändert. Bitte neu laden, bevor du weiterarbeitest.','Data changed in another window. Reload before continuing.','Les données ont changé dans une autre fenêtre. Rechargez la page.'],
  search:['Person oder Verwendungszweck suchen','Search people or purpose','Rechercher une personne ou un motif'],
  active:['Offen','Open','En cours'], soon:['Bald fällig (7 Tage)','Due within 7 days','Échéance sous 7 jours'],
  lastBackup:['Letztes Backup','Last backup','Dernière sauvegarde'], never:['Noch kein Backup','No backup yet','Aucune sauvegarde'],
  backupHint:['Regelmäßig sichern: Browserdaten zu löschen entfernt auch deine App-Daten.','Back up regularly: clearing browser data also removes app data.','Sauvegardez régulièrement : effacer les données du navigateur supprime celles de l’application.'],
  backupNote:['Der Zeitpunkt bestätigt die Übergabe an den Browser. Prüfe, ob die Datei tatsächlich gespeichert wurde.','The time confirms handoff to the browser. Check that the file was actually saved.','L’heure confirme la remise au navigateur. Vérifiez que le fichier a été enregistré.'],
  recovery:['Gesicherte Versionen','Saved versions','Versions conservées'],
  restore:['Wiederherstellen','Restore','Restaurer'], savedLocal:['Lokaler Stand vor dem Ersetzen','Local version before replacement','Version locale avant remplacement'], savedOnline:['Abweichender GitHub-Stand','Conflicting GitHub version','Version GitHub différente'],
  protected:['Daten und gespeicherte GitHub-Zugangsdaten sind lokal verschlüsselt.','Local data and saved GitHub credentials are encrypted.','Les données locales et les identifiants GitHub enregistrés sont chiffrés.'],
  unprotected:['Lokale Daten sind unverschlüsselt. GitHub-Token und Backup-Passwort bleiben deshalb nur bis zum Sperren oder Neuladen im Arbeitsspeicher.','Local data is unencrypted. GitHub token and backup password stay in memory only until locking or reloading.','Les données locales ne sont pas chiffrées. Le jeton GitHub et le mot de passe de sauvegarde restent uniquement en mémoire jusqu’au verrouillage ou rechargement.'],
  legacy:['Bisheriger Passwortschutz: nur Bildschirmsperre. Lege hier ein neues Passwort fest, um Daten und Zugangsdaten zu verschlüsseln.','Legacy password: screen lock only. Set a new password here to encrypt data and credentials.','Ancien mot de passe : verrouillage de l’écran uniquement. Définissez un nouveau mot de passe pour chiffrer les données.'],
  passwordHelp:['Mindestens 10 Zeichen. Sicher aufbewahren: Ohne Passwort lassen sich verschlüsselte Daten nicht wiederherstellen.','At least 10 characters. Keep it safe: encrypted data cannot be recovered without it.','Au moins 10 caractères. Conservez-le : les données chiffrées ne peuvent être récupérées sans lui.'],
  repeat:['Passwort wiederholen','Repeat password','Répéter le mot de passe'], passwordError:['Mindestens 10 Zeichen; beide Passwörter müssen übereinstimmen.','At least 10 characters; passwords must match.','Au moins 10 caractères ; les mots de passe doivent correspondre.'],
  lockHelp:['Passwort zum Entschlüsseln eingeben.','Enter password to decrypt.','Saisissez le mot de passe pour déchiffrer.'],
  setupHelp:['Mit Passwort werden deine lokalen Daten verschlüsselt. Ohne Passwort bleiben sie lesbar im Browser gespeichert.','A password encrypts local data. Without one, data is stored unencrypted in the browser.','Un mot de passe chiffre les données locales. Sans mot de passe, elles restent lisibles dans le navigateur.'],
  deleteDebt:['Diese Schuld einschließlich aller Buchungen löschen? Rückgängig bleibt bis zur nächsten Änderung möglich.','Delete this debt and all entries? Undo is available until the next change.','Supprimer cette dette et toutes ses écritures ? Annulation possible jusqu’à la prochaine modification.'],
  deletePerson:['Person und alle zugehörigen Schulden löschen? Rückgängig bleibt bis zur nächsten Änderung möglich.','Delete person and all their debts? Undo is available until the next change.','Supprimer la personne et toutes ses dettes ? Annulation possible jusqu’à la prochaine modification.'],
  deleteEvent:['Diese Buchung löschen?','Delete this entry?','Supprimer cette écriture ?'],
  rateAnnual:['Jahreszinssatz (%)','Annual interest rate (%)','Taux annuel (%)'], rateError:['Der Jahreszinssatz muss zwischen 0 und 100 % liegen.','Annual rate must be between 0 and 100%.','Le taux annuel doit être compris entre 0 et 100 %.'],
  interestHint:['Einfache Jahreszinsen, tatsächliche Tage / 365, ohne Zinseszins. Zahlungen tilgen zuerst gebuchte Gebühren und Zinsen. Der Vorschlag wird erst durch Buchen zum offenen Betrag addiert.','Simple annual interest, actual days / 365, no compounding. Payments settle posted charges and interest first. The estimate is added to the balance only when posted.','Intérêts annuels simples, jours réels / 365, sans capitalisation. Les paiements règlent d’abord les frais et intérêts comptabilisés. Le calcul n’est ajouté au solde qu’après comptabilisation.'],
  interestProposal:['Zinsvorschlag bis heute','Interest estimate through today','Intérêts estimés jusqu’à aujourd’hui'], bookInterest:['Zinsen buchen','Post interest','Comptabiliser les intérêts'],
  editHint:['Bereits gebuchte Zinsen bleiben feste Beträge. Prüfe sie nach Änderungen an älteren Buchungen.','Posted interest stays fixed. Review it after editing older entries.','Les intérêts comptabilisés restent fixes. Vérifiez-les après modification d’anciennes écritures.'],
  noResults:['Keine passenden Einträge','No matching entries','Aucun résultat'],
  ghPrivate:['GitHub-Abgleich ist nur mit einem privaten Repository erlaubt.','GitHub sync requires a private repository.','La synchronisation GitHub exige un dépôt privé.'],
  ghSettings:['Bitte einen Token und Repository im Format Besitzer/Name angeben.','Enter a token and a repository in owner/name format.','Indiquez un jeton et un dépôt au format propriétaire/nom.'],
  ghUnreadable:['Online-Backup konnte nicht entschlüsselt oder geprüft werden. Es wird nicht überschrieben. Prüfe das Backup-Passwort.','Online backup could not be decrypted or validated. It will not be overwritten. Check the backup password.','La sauvegarde distante n’a pas pu être déchiffrée ou validée. Elle ne sera pas écrasée. Vérifiez le mot de passe.'],
  conflict:['Abweichende Datenstände','Different data versions','Versions différentes'],
  conflictHelp:['Wähle bewusst einen Stand. Vor dem Ersetzen wird die andere Version unter „Gesicherte Versionen“ auf diesem Gerät aufbewahrt. Kein automatisches Zusammenführen.','Choose a version. Before replacement, the other version is kept under Saved versions on this device. No automatic merge.','Choisissez une version. Avant remplacement, l’autre est conservée dans Versions conservées sur cet appareil. Aucune fusion automatique.'],
  local:['Lokal','Local','Local'], online:['GitHub','GitHub','GitHub'], useLocal:['Lokalen Stand hochladen','Upload local version','Envoyer la version locale'], useOnline:['GitHub-Stand übernehmen','Use GitHub version','Utiliser la version GitHub'],
  ghChanged:['GitHub wurde zwischenzeitlich geändert. Bitte den Abgleich erneut starten.','GitHub changed meanwhile. Start sync again.','GitHub a changé entre-temps. Relancez la synchronisation.'],
  plainBackup:['Ohne Backup-Passwort sind exportierte JSON-Dateien und GitHub-Backups unverschlüsselt. Das App-Passwort gilt nur für den lokalen Speicher.','Without a backup password, exported JSON files and GitHub backups are unencrypted. The app password protects local storage only.','Sans mot de passe de sauvegarde, les fichiers JSON et sauvegardes GitHub ne sont pas chiffrés. Le mot de passe de l’application protège uniquement le stockage local.'],
  backupPassword:['Backup-Passwort (optional, für JSON und GitHub)','Backup password (optional, for JSON and GitHub)','Mot de passe de sauvegarde (facultatif, JSON et GitHub)'],
  importPassword:['Passwort dieses verschlüsselten Backups','Password for this encrypted backup','Mot de passe de cette sauvegarde chiffrée'],
  export:['Herunterladen','Download','Télécharger'], version:['Version 4 · lokal & offline','Version 4 · local & offline','Version 4 · local et hors ligne'],
  saved:['Gespeichert','Saved','Enregistré'], pending:['Wird gespeichert …','Saving …','Enregistrement …'],
  recoveryFull:['Es sind bereits fünf Sicherungsversionen gespeichert. Exportiere und entferne zuerst eine Version in den Einstellungen.','Five recovery versions are already saved. Export and remove one in Settings first.','Cinq versions sont déjà conservées. Exportez puis supprimez-en une dans les réglages.'],
  removeRecovery:['Diese gesicherte Version vom Gerät entfernen?','Remove this saved version from the device?','Supprimer cette version conservée de l’appareil ?'],
  legacyOverpay:['Ein älterer Eintrag enthält eine Überzahlung. Korrigiere ihn unter Bearbeiten; deine bisherigen Daten wurden erhalten.','An older entry contains an overpayment. Correct it with Edit; existing data was preserved.','Une ancienne écriture contient un trop-perçu. Corrigez-la avec Modifier ; les données existantes sont conservées.'],
  offline:['Offline – deine Daten bleiben lokal verfügbar.','Offline – your data remains available locally.','Hors ligne – vos données restent disponibles localement.'],
  importSize:['Die Datei ist zu groß (maximal 20 MB).','File is too large (20 MB maximum).','Fichier trop volumineux (20 Mo maximum).']
});
Object.assign(T,{direction:['Richtung','Direction','Sens'],chargeMode:['Zinsaufschlag','Interest charge','Intérêts à ajouter'],saveAccess:['Zugangsdaten übernehmen','Save access settings','Enregistrer les accès']});
Object.assign(T,{
  bad:['Benutzername oder Passwort stimmt nicht.','Username or password is incorrect.','Nom d’utilisateur ou mot de passe incorrect.'],
  username:['Benutzername oder E-Mail','Username or email','Nom d’utilisateur ou e-mail'],
  usernameError:['Bitte einen Benutzernamen mit 1 bis 100 Zeichen angeben.','Enter a username between 1 and 100 characters.','Indiquez un nom d’utilisateur de 1 à 100 caractères.'],
  usernameSave:['Benutzernamen speichern','Save username','Enregistrer le nom d’utilisateur'],
  login:['Anmelden','Sign in','Se connecter'],
  loginSetup:['Anmeldung einrichten','Set up sign-in','Configurer la connexion'],
  usernameHint:['Dein Benutzername gilt für diesen lokalen Datensatz und wird auf diesem Gerät gespeichert.','Your username identifies this local dataset and is saved on this device.','Votre nom d’utilisateur identifie ces données locales et est enregistré sur cet appareil.'],
  legacyUsername:['Bestehender Datensatz: Du kannst beim Anmelden einen Benutzernamen ergänzen oder ihn später in den Einstellungen speichern.','Existing dataset: add a username when signing in, or save one later in Settings.','Données existantes : ajoutez un nom lors de la connexion ou plus tard dans les réglages.'],
  version:['Version 5 · Anmeldung & Autofill','Version 5 · sign-in & autofill','Version 5 · connexion et remplissage automatique']
});
const C=Ledger, LC=['de-DE','en-GB','fr-FR'], $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const t=k=>(T[k]||[k,k,k])[L], uid=()=>crypto.randomUUID(), clone=C.clone;
const today=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');};
const in7=()=>{const d=new Date(today()+'T12:00:00');d.setDate(d.getDate()+7);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');};
const eur=n=>new Intl.NumberFormat(LC[L],{style:'currency',currency:'EUR'}).format(n/100);
const fd=s=>C.date(s)?new Date(s+'T12:00:00').toLocaleDateString(LC[L]):'—';
const dt=n=>n?new Date(n).toLocaleString(LC[L]):t('never');
const inputMoney=n=>(n/100).toFixed(2).replace('.',L===1?'.':',');
const bal=C.balance, st=d=>C.status(d,today(),in7()), per=id=>S.people.find(p=>p.id===id), dbt=()=>S.debts.find(d=>d.id===V.id), purpose=d=>T[d.purpose]?t(d.purpose):d.purpose;
const KEY='sm-vault', empty=()=>({state:{people:[],debts:[],ts:0,lang:0,setup:false,pw:null},settings:{},undo:null,backups:[],backupAt:0,bases:{}});
let P=empty(),S=P.state,L=0,V={v:'home'},GC={},secret='',locked=false,encrypted=false,busy=false,message='',failure='',disk=null,lockAfter=false,configDirty=false,knownUsername='';
function username(value,required=true){const name=String(value??'').trim();if((required&&!name)||name.length>100||/[\u0000-\u001f\u007f]/.test(name))throw Error('usernameError');return name;}
const sameUsername=(a,b)=>a.toLocaleLowerCase('en-US')===b.toLocaleLowerCase('en-US');
function sync(){S=P.state;L=Number.isInteger(S.lang)&&S.lang>=0&&S.lang<=2?S.lang:0;GC=P.settings||{};}
function storageValue(){try{return localStorage.getItem(KEY);}catch(e){throw Error('storageError');}}
async function write(next=P,password=secret){
  if(storageValue()!==disk)throw Error('concurrent');
  const body=clone(next);
  if(!password){body.settings={repo:GC.repo||body.settings.repo||'',file:GC.file||body.settings.file||''};}
  const record={version:4,username:username(body.state.username||'',false),...(password?{encrypted:true,payload:await C.encrypt(JSON.stringify(body),password)}:{encrypted:false,data:body})};
  const value=JSON.stringify(record);
  // Recheck after PBKDF2; Web Locks serializes writers across supported tabs.
  const persist=()=>{if(storageValue()!==disk)throw Error('concurrent');try{localStorage.setItem(KEY,value);if(localStorage.getItem(KEY)!==value)throw Error();}catch(e){throw Error('storageError');}disk=value;};
  if(navigator.locks)await navigator.locks.request('schulden-manager-vault',persist);else persist();
  encrypted=!!password;
  knownUsername=record.username;
  try{localStorage.removeItem('sm');localStorage.removeItem('smgh');}catch(e){/* The verified new record remains authoritative. */}
}
function dataState(){return {people:clone(S.people),debts:clone(S.debts),ts:S.ts};}
function pushRecovery(data,label){if(P.backups.length>=5)throw Error('recoveryFull');P.backups.push({id:uid(),at:Date.now(),label,data:clone(data)});}
async function commit(label,change){
  const before=clone(P), beforeGC=clone(GC);
  try{
    P.undo={label,at:Date.now(),data:dataState()};
    change();S.ts=Date.now();await write();sync();message=t('saved');failure='';return true;
  }catch(e){P=before;sync();GC=beforeGC;P.settings=GC;throw e;}
}
async function savePreferences(change){const before=clone(P);try{change();await write();sync();}catch(e){P=before;sync();throw e;}}
const go=(v,x={})=>{V={v,...x};failure='';message='';window.scrollTo(0,0);render();};
const button=(action,label,extra='',cls='b2')=>`<button type="button" class="${cls}" data-a="${action}" ${extra}>${esc(label)}</button>`;
const back=()=>button('back',t('back'),'','bk');
const field=(key,label,value='',type='text',extra='')=>`<label class="f"><span class="m">${esc(label)}</span><input class="i" type="${type}" data-f="${key}" value="${esc(value)}" ${extra}></label>`;
const moneyField=(key,label,value='')=>field(key,label,value,'text','inputmode="decimal" autocomplete="off" maxlength="24"');
const select=(key,label,values,current)=>`<label class="f"><span class="m">${esc(label)}</span><select class="i" data-f="${key}">${values.map(([v,l])=>`<option value="${esc(v)}"${String(v)===String(current)?' selected':''}>${esc(l)}</option>`).join('')}</select></label>`;
function banner(){return `${!navigator.onLine?`<div class="notice">${t('offline')}</div>`:''}${failure?`<div class="notice o" role="alert">${esc(failure)}</div>`:''}${message?`<div class="notice g" role="status">${esc(message)}</div>`:''}`;}
const backupStatus=()=>`<div class="c"><span class="m">${t('lastBackup')}</span><b class="${!P.backupAt||Date.now()-P.backupAt>7*864e5?'y':''}">${esc(dt(P.backupAt))}</b><span class="m">${t('backupHint')}</span>${button('export',t('expb'))}</div>`;
function row(d){const status=st(d);return button('debt',`${per(d.pid)?.name||'—'} · ${purpose(d)} · ${eur(bal(d))} · ${fd(d.due)} · ${t(status==='open'?'active':status==='due'?'soon':status)}`,`data-id="${d.id}"`,'c debt-row '+(status==='over'?'ry':status==='due'?'rr':''));}
function purposeSummary(){const sums=new Map();for(const d of S.debts){const label=purpose(d);sums.set(label,(sums.get(label)||0)+d.dir*bal(d));}const entries=[...sums].filter(x=>x[1]).sort((a,b)=>Math.abs(b[1])-Math.abs(a[1])),max=Math.max(1,...entries.map(x=>Math.abs(x[1])));return entries.length?`<div class="c"><h2>${t('byU')}</h2>${entries.map(([label,value])=>`<div class="r"><span>${esc(label)}</span><b class="${value>0?'g':'o'}">${eur(value)}</b></div><div class="bar" style="width:${Math.abs(value)/max*100}%;background:var(${value>0?'--g':'--r'})"></div>`).join('')}</div>`:'';}
function home(){const active=S.debts.filter(d=>bal(d)>0),sum=dir=>active.filter(d=>d.dir===dir).reduce((a,d)=>a+bal(d),0),a=sum(1),b=sum(-1);
  const due=active.filter(d=>['due','over'].includes(st(d))).sort((a,b)=>a.due.localeCompare(b.due));
  return `<h1>${t('ov')}</h1><div class="s"><div class="c"><span class="m">${t('owedMe')}</span><b class="big g">${eur(a)}</b></div><div class="c"><span class="m">${t('iowe')}</span><b class="big o">${eur(b)}</b></div></div><div class="c r"><span>${t('bal')}</span><b class="big ${a>=b?'g':'o'}">${eur(a-b)}</b></div>${backupStatus()}${due.length?`<h2>${t('dueList')}</h2>${due.map(row).join('')}`:''}<h2>${t('byP')}</h2>${S.people.map(p=>{const n=S.debts.filter(d=>d.pid===p.id).reduce((a,d)=>a+d.dir*bal(d),0);return n?button('person',p.name+' · '+eur(n),`data-id="${p.id}"`,'c'):'';}).join('')||`<p class="m">${t('none')}</p>`}${purposeSummary()}${button('new','+ '+t('nd'),'','fab')}`;
}
function debtList(){const f=V.f||(V.f={query:'',status:'active',dir:'all'}),query=(f.query||'').toLocaleLowerCase(LC[L]);
  const list=S.debts.filter(d=>(f.dir==='all'||d.dir===+f.dir)&&(f.status==='all'||f.status==='active'&&bal(d)>0||st(d)===f.status)&&((per(d.pid)?.name||'')+' '+purpose(d)).toLocaleLowerCase(LC[L]).includes(query)).sort((a,b)=>a.due.localeCompare(b.due));
  return `<h1>${t('debts')}</h1>${field('query',t('search'),f.query)}<div class="s">${select('status',t('debts'),[['active',t('active')],['all',t('all')],['over',t('over')],['due',t('soon')],['paid',t('done')]],f.status)}${select('dir',t('direction'),[['all',t('all')],['1',t('fIn')],['-1',t('iowe')]],f.dir)}</div><div id="results">${list.map(row).join('')||`<p class="m">${t('noResults')}</p>`}</div>${button('new','+ '+t('nd'),'','fab')}`;
}
function peopleView(){const f=V.f||(V.f={query:'',name:''}),list=S.people.filter(p=>p.name.toLocaleLowerCase(LC[L]).includes(f.query.toLocaleLowerCase(LC[L])));
  return `<h1>${t('ppl')}</h1>${field('query',t('search'),f.query)}<div class="s">${field('name',t('name'),f.name,'text','maxlength="200"')}${button('addPerson',t('add'))}</div><div id="results">${list.map(p=>button('person',p.name+' · '+eur(S.debts.filter(d=>d.pid===p.id).reduce((a,d)=>a+d.dir*bal(d),0)),`data-id="${p.id}"`,'c')).join('')||`<p class="m">${t('noResults')}</p>`}</div>`;
}
function history(d){return d.h.map((e,i)=>({e,i})).sort((a,b)=>b.e.dt.localeCompare(a.e.dt)||b.i-a.i).map(({e})=>`<div class="history"><div><b>${t(e.k==='init'?(d.dir===1?'gave':'got'):e.k==='pay'?'pay':e.k==='late'?'late':'intE')} · ${eur(C.cents(e.a))}</b><div class="m">${fd(e.dt)}${e.ch?' · '+esc(t(e.ch)):''}${e.ch==='combo'&&e.sp?' ('+['cash','pp','bank'].filter(k=>e.sp[k]).map(k=>esc(t(k))+' '+eur(C.cents(e.sp[k]))).join(' + ')+')':''}${e.n?' · '+esc(e.n):''}${e.to?' · '+fd(e.from)+' – '+fd(e.to):''}</div></div>${button(e.k==='init'?'editDebt':'editEvent',t('edit'),`data-id="${d.id}" data-eid="${e.id}"`,'q')}</div>`).join('');}
function personView(){const p=per(V.id),ds=S.debts.filter(d=>d.pid===p.id);return `${back()}<h1>${esc(p.name)}</h1><div class="w">${button('rename',t('edit'))}${button('deletePerson',t('remove'))}</div>${ds.map(row).join('')}${button('new',t('nd'),`data-pid="${p.id}"`)}<h2>${t('hist')}</h2>${ds.map(d=>`<div class="c"><b>${esc(purpose(d))}</b>${history(d)}</div>`).join('')}`;}
function debtView(){const d=dbt(),estimate=C.interest(d,today());return `${back()}<h1>${esc(per(d.pid)?.name)}</h1><div class="c"><span>${esc(purpose(d))}</span><b class="big ${d.dir===1?'g':'o'}">${eur(bal(d))}</b><span>${t('dueBy')}: ${fd(d.due)} · ${t(st(d)==='open'?'active':st(d)==='due'?'soon':st(d))}</span></div>${bal(d)<0?`<div class="notice y">${t('legacyOverpay')}</div>`:''}<div class="w">${button('editDebt',t('edit'))}${button('deleteDebt',t('remove'))}</div>${bal(d)>0?`${button('pay',t('pay'),'','b')}<div class="s">${button('post',t('post'))}${button('charge',t('int'))}</div>`:''}${d.h[0].r?`<div class="c"><b>${t('rateAnnual')}: ${d.h[0].r}%</b><span>${t('interestProposal')}: ${eur(estimate.amount)}</span><span class="m">${t('interestHint')}</span>${estimate.amount>0?button('bookInterest',t('bookInterest')):''}</div>`:''}<div class="c"><h2>${t('hist')}</h2>${history(d)}</div>`;}
function channels(f){return `${select('ch',t('ch'),['cash','pp','bank','combo'].map(k=>[k,t(k)]),f.ch)}${f.ch==='combo'?`<div class="s">${moneyField('cash',t('cash'),f.cash)}${moneyField('pp',t('pp'),f.pp)}${moneyField('bank',t('bank'),f.bank)}</div>`:''}`;}
function editDebtView(){const f=V.f;return `${back()}<h1>${t(V.id?'edit':'nd')}</h1>${select('dir',t('direction'),[['1',t('give')],['-1',t('get')]],f.dir)}${select('pid',t('person'),[...S.people.map(p=>[p.id,p.name]),['new',t('np')]],f.pid)}${f.pid==='new'?field('name',t('name'),f.name,'text','maxlength="200"'):''}${field('purpose',t('why'),f.purpose,'text','maxlength="200" list="purpose-list"')}<datalist id="purpose-list">${['bike','food','rent','lic'].map(k=>`<option value="${esc(t(k))}">`).join('')}</datalist><div class="s">${moneyField('amt',t('amt'),f.amt)}${moneyField('rate',t('rateAnnual'),f.rate)}</div><span class="m">${t('interestHint')}</span>${channels(f)}<div class="s">${field('date',t('date'),f.date,'date')}${field('due',t('dueBy'),f.due,'date')}</div>${field('note',t('note'),f.note,'text','maxlength="2000"')}${V.id?`<span class="m">${t('editHint')}</span>`:''}${button('saveDebt',t('save'),'','b')}`;}
function eventView(){const f=V.f;return `${back()}<h1>${t(V.eid?'edit':V.kind==='pay'?'pay':'int')}</h1>${V.kind!=='pay'&&!V.eid?select('mode',t('chargeMode'),[['fix',t('fix')],['pct',t('pct')]],f.mode||'fix'):''}${moneyField('amt',V.kind!=='pay'&&f.mode==='pct'?t('pct'):t('amt'),f.amt)}${V.kind==='pay'?channels(f):''}${field('date',t('date'),f.date,'date')}${field('note',t('note'),f.note,'text','maxlength="2000"')}${V.eid?`<span class="m">${t('editHint')}</span>`:''}${button('saveEvent',t('save'),'','b')}${V.eid?button('deleteEvent',t('remove')):''}`;}
function postponeView(){const f=V.f;return `${back()}<h1>${t('post')}</h1><div class="w">${[1,2,3].map(m=>button('months','+'+m+' '+t('mon'),`data-months="${m}"`,'q')).join('')}</div>${field('due',t('nf'),f.due,'date')}${select('mode',t('late'),[['fix',t('fix')],['pct',t('pct')]],f.mode||'fix')}${moneyField('amt',f.mode==='pct'?t('pct'):t('late')+' (€)',f.amt)}${field('note',t('note'),f.note,'text','maxlength="2000"')}${button('savePost',t('save'),'','b')}`;}
function settings(){return `<h1>${t('set')}</h1><div class="c"><h2>${t('lang')}</h2><div class="w">${['Deutsch','English','Français'].map((l,i)=>button('language',l,`data-lang="${i}"`,'q '+(L===i?'qa':''))).join('')}</div></div><div class="c"><h2>${t('loginSetup')}</h2><span class="${encrypted?'g':'y'}">${t(encrypted?'protected':S.pw?'legacy':'unprotected')}</span><span class="m">${t('passwordHelp')}</span><form id="credentials-form" method="post" autocomplete="on">${field('username',t('username'),S.username||knownUsername,'text','name="username" autocomplete="username" autocapitalize="none" spellcheck="false" maxlength="100" required')}<span class="m">${t('usernameHint')}</span>${button('usernameSave',t('usernameSave'))}${field('password',t(encrypted?'chpw':'setpw'),'','password','name="password" autocomplete="new-password" minlength="10" required')}${field('repeat',t('repeat'),'','password','name="confirmPassword" autocomplete="new-password" minlength="10" required')}<button class="b2" type="submit">${t(encrypted?'chpw':'setpw')}</button></form>${encrypted||S.pw?button('lock',t('lock')):''}</div>${backupStatus()}<div class="c"><h2>${t('exp')}</h2><label class="f"><span class="m">${t('backupPassword')}</span><input class="i" type="password" data-g="enc" value="${esc(GC.enc||'')}" autocomplete="off"></label><span class="m">${t('plainBackup')}</span><span class="m">${t('backupNote')}</span><div class="s">${button('export',t('expb'))}${button('csv',t('expc'))}</div>${button('import',t('imp'))}${button('share',t('share'))}<input type="file" id="import-file" accept=".json,application/json" hidden></div><div class="c"><h2>${t('gh')}</h2><span class="m">${t('ghHelp')}</span><span class="m">${t('ghPrivate')}</span><label class="f"><span class="m">${t('ghTok')}</span><input class="i" type="password" data-g="tok" value="${esc(GC.tok||'')}" autocomplete="off"></label><label class="f"><span class="m">${t('ghRepo')}</span><input class="i" data-g="repo" value="${esc(GC.repo||'')}" placeholder="Besitzer/Repository" autocomplete="off"></label><label class="f"><span class="m">${t('ghFile')}</span><input class="i" data-g="file" value="${esc(GC.file||'schulden-backup.json')}" autocomplete="off"></label><div class="s">${button('ghup',t('up'))}${button('ghdn',t('dn'))}</div>${button('saveAccess',t('saveAccess'))}</div>${P.backups.length?`<div class="c"><h2>${t('recovery')}</h2>${P.backups.map(r=>`<div class="history"><div><b>${esc(t(r.label))}</b><span class="m">${esc(dt(r.at))}</span></div><div class="w">${button('recoveryExport',t('export'),`data-rid="${r.id}"`,'q')}${button('recoveryRestore',t('restore'),`data-rid="${r.id}"`,'q')}${button('recoveryDelete',t('remove'),`data-rid="${r.id}"`,'q')}</div></div>`).join('')}</div>`:''}<span class="m">${t('version')}</span>`;}
function lockView(){const initial=!S.setup&&!encrypted;return `<h1>Schulden-Manager</h1><div class="w">${['DE','EN','FR'].map((x,i)=>button('lockLanguage',x,`data-lang="${i}"`,'q')).join('')}</div><form id="login-form" class="c" method="post" autocomplete="on"><p>${t(initial?'setupHelp':encrypted?'lockHelp':'legacy')}</p>${field('username',t('username'),knownUsername,'text',`id="login-username" name="username" autocomplete="username" autocapitalize="none" spellcheck="false" maxlength="100" ${initial||knownUsername?'required':''}`)}${!initial&&!knownUsername?`<span class="m">${t('legacyUsername')}</span>`:''}${field('password',t('pw'),'','password',`id="login-password" name="password" autocomplete="${initial?'new-password':'current-password'}" required`)}${initial?field('repeat',t('repeat'),'','password','id="login-confirm-password" name="confirmPassword" autocomplete="new-password" minlength="10" required'):''}${initial?`<span class="m">${t('passwordHelp')}</span>`:''}<button class="b" type="submit">${t(initial?'loginSetup':'login')}</button>${initial?button('skip',t('skip')):''}</form>`;}

function conflictView(){const {remote}=V.conflict;return `${back()}<h1>${t('conflict')}</h1><p>${t('conflictHelp')}</p><div class="s"><div class="c"><b>${t('local')}</b><span>${S.people.length} ${t('ppl')} · ${S.debts.length} ${t('debts')}</span><span class="m">${esc(dt(S.ts))}</span></div><div class="c"><b>${t('online')}</b><span>${remote.people.length} ${t('ppl')} · ${remote.debts.length} ${t('debts')}</span><span class="m">${esc(dt(remote.ts))}</span></div></div>${button('conflictLocal',t('useLocal'),'','b')}${button('conflictOnline',t('useOnline'))}${button('back',t('cancel'))}`;}
function render(){
  sync();let h;
  if(locked||!S.setup)h=lockView();
  else {
    const views={home,debts:debtList,ppl:peopleView,set:settings,person:personView,debt:debtView,editDebt:editDebtView,event:eventView,post:postponeView,conflict:conflictView};
    if(!views[V.v])V={v:'home'};
    h=views[V.v]();
    if(P.undo)h+=`<div class="undo">${button('undo',t('undo')+' · '+t(P.undo.label),'','bk')}</div>`;
    h+=`<nav aria-label="Navigation"><div>${[['home','ov'],['debts','debts'],['ppl','ppl'],['set','set']].map(([v,l])=>button('nav',t(l),`data-view="${v}" ${V.v===v?'aria-current="page"':''}`,V.v===v?'on':'')).join('')}</div></nav>`;
  }
  $('#app').innerHTML=banner()+h;document.documentElement.lang=['de','en','fr'][L];
  if(busy)$('#app').querySelectorAll('button,input,select').forEach(e=>{if(!e.matches('input')||!e.closest('#login-form,#credentials-form'))e.disabled=true;});
}
function nameCheck(name,except){name=String(name||'').trim();if(!name||name.length>200)throw Error('nameError');if(S.people.some(p=>p.id!==except&&p.name.toLocaleLowerCase(LC[L])===name.toLocaleLowerCase(LC[L])))throw Error('duplicate');return name;}
function parseAmount(value,zero=false){const n=C.money(value,L);if(!zero&&n<=0)throw Error('positive');return n;}
function split(f,amount){if(f.ch!=='combo')return undefined;const parts={cash:parseAmount(f.cash||'0',true)/100,pp:parseAmount(f.pp||'0',true)/100,bank:parseAmount(f.bank||'0',true)/100};if(Object.values(parts).reduce((a,v)=>a+C.cents(v),0)!==amount)throw Error('split');return parts;}
function checkChangedDebt(d){
  const verified=C.validate({people:S.people,debts:[d]});
  return verified.debts[0];
}
function openDebtForm(id,pid){
  const d=S.debts.find(d=>d.id===id),e=d?.h[0];
  go('editDebt',{id,bk:V,f:{dir:d?.dir||1,pid:d?.pid||pid||S.people[0]?.id||'new',name:'',purpose:d?purpose(d):'',amt:e?inputMoney(C.cents(e.a)):'',rate:e?String(e.r||0).replace('.',L===1?'.':','):'0',date:e?.dt||today(),due:d?.due||C.addMonths(today(),1),ch:e?.ch||'cash',cash:inputMoney(C.cents(e?.sp?.cash||0)),pp:inputMoney(C.cents(e?.sp?.pp||0)),bank:inputMoney(C.cents(e?.sp?.bank||0)),note:e?.n||''}});
}
function openEvent(kind,eid){const d=dbt(),e=d.h.find(e=>e.id===eid);go('event',{id:d.id,kind:e?.k||kind,eid,bk:V,f:{amt:inputMoney(e?C.cents(e.a):kind==='pay'?Math.max(0,bal(d)):0),date:e?.dt||today(),ch:e?.ch||'cash',cash:inputMoney(C.cents(e?.sp?.cash||0)),pp:inputMoney(C.cents(e?.sp?.pp||0)),bank:inputMoney(C.cents(e?.sp?.bank||0)),note:e?.n||''}});}
async function saveDebt(){
  const f=V.f,amount=parseAmount(f.amt),rate=C.money(f.rate||'0',L)/100;
  if(rate>100)throw Error('rateError');if(!C.date(f.date)||!C.date(f.due)||f.due<f.date)throw Error('dateError');
  if(!String(f.purpose||'').trim()||f.purpose.length>200)throw Error('formatError');
  const old=S.debts.find(d=>d.id===V.id),id=old?.id||uid(),pid=f.pid==='new'?uid():f.pid,newName=f.pid==='new'?nameCheck(f.name):null;
  const e={id:old?.h[0].id||uid(),k:'init',a:amount/100,r:rate,dt:f.date,n:f.note||'',ch:f.ch};
  if(f.ch==='combo')e.sp=split(f,amount);
  const candidate={id,pid,dir:+f.dir,purpose:f.purpose.trim(),due:f.due,h:old?[e,...clone(old.h.slice(1))]:[e]};
  C.validate({people:[...S.people,...(newName?[{id:pid,name:newName}]:[])],debts:[candidate]});
  await commit(old?'edit':'nd',()=>{if(newName)S.people.push({id:pid,name:newName});if(old)S.debts=S.debts.map(d=>d.id===id?candidate:d);else S.debts.push(candidate);});
  go('debt',{id,bk:{v:'debts'}});message=t('saved');
}
async function saveEvent(){
  const d=dbt(),f=V.f,value=parseAmount(f.amt),amount=V.kind!=='pay'&&f.mode==='pct'&&!V.eid?Math.round(Math.max(0,bal(d))*value/10000):value;if(amount<=0)throw Error('positive');
  if(!C.date(f.date)||f.date<d.h[0].dt||f.date>today())throw Error('dateError');
  const previous=d.h.find(e=>e.id===V.eid);
  const e={id:V.eid||uid(),k:V.kind,a:amount/100,dt:f.date,n:f.note||''};
  if(V.kind==='pay'){e.ch=f.ch;if(f.ch==='combo')e.sp=split(f,amount);}
  // Editing an interest entry turns it into an explicitly fixed manual charge.
  // Preserve its accrual cursor so the same period cannot be proposed twice.
  if(previous?.to){e.from=previous.from;e.to=f.date;if(e.to<e.from)throw Error('dateError');}
  const candidate=clone(d);if(V.eid)candidate.h=candidate.h.map(x=>x.id===V.eid?e:x);else candidate.h.push(e);
  checkChangedDebt(candidate);
  await commit(V.eid?'edit':V.kind==='pay'?'pay':'int',()=>{S.debts=S.debts.map(x=>x.id===d.id?candidate:x);});
  V=V.bk||{v:'debt',id:d.id};message=t('saved');
}
async function legacyHash(p){const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('sm:'+p));return Array.from(new Uint8Array(bytes),b=>b.toString(16).padStart(2,'0')).join('');}
function normalizeBody(body){
  if(!body||!body.state)throw Error('formatError');
  const data=C.validate(body.state,true);
  const state={...data,username:username(body.state.username||'',false),lang:[0,1,2].includes(body.state.lang)?body.state.lang:0,setup:!!body.state.setup,pw:typeof body.state.pw==='string'?body.state.pw:null};
  const settings={};for(const k of ['tok','repo','file','enc'])if(typeof body.settings?.[k]==='string')settings[k]=body.settings[k].slice(0,2000);
  if(body.backups&&!Array.isArray(body.backups))throw Error('formatError');
  const backups=(body.backups||[]).map(r=>{if(!r||typeof r.id!=='string'||typeof r.at!=='number')throw Error('formatError');return {id:r.id,at:r.at,label:r.label==='savedOnline'?'savedOnline':'savedLocal',data:C.validate(r.data,true)};});
  const undo=body.undo?{label:body.undo.label,at:body.undo.at,data:C.validate(body.undo.data,true)}:null;
  return {state,settings,backups,undo,backupAt:typeof body.backupAt==='number'?body.backupAt:0,bases:body.bases&&typeof body.bases==='object'?body.bases:{}};
}
async function setPassword(initial){
  const password=V.f?.password||'',repeat=V.f?.repeat||'';
  if(password.length<10||password!==repeat)throw Error('passwordError');
  const name=username(V.f?.username??S.username??knownUsername,initial||V.f?.username!==undefined);
  const old=clone(P),oldSecret=secret;
  try{S.setup=true;S.pw=null;S.username=name;await write(P,password);secret=password;locked=false;sync();V={v:initial?'home':'set',f:{}};message=t('saved');}
  catch(e){P=old;secret=oldSecret;sync();throw e;}
}
async function unlock(){
  const password=V.f?.password||'';
  const name=username(V.f?.username||'',false),before={P:clone(P),secret,locked};
  if(encrypted){
    const source=storageValue();let next;try{const record=JSON.parse(source);next=normalizeBody(JSON.parse(await C.decrypt(record.payload,password)));}catch(e){throw Error('bad');}
    if(storageValue()!==source)throw Error('concurrent');
    if(next.state.username&&!sameUsername(name,next.state.username))throw Error('bad');
    P=next;secret=password;sync();locked=false;disk=source;
  }else {if((S.username&&!sameUsername(name,S.username))||await legacyHash(password)!==S.pw)throw Error('bad');locked=false;}
  if(!S.username&&name){try{S.username=name;await write();}catch(e){({P,secret,locked}=before);sync();throw e;}}
  V={v:'home'};failure='';message='';
}
function lockNow(){secret='';GC.tok='';GC.enc='';locked=true;V={v:'home'};failure='';message='';if(encrypted){P=empty();P.state.setup=true;sync();}render();}
const backupObject=data=>({version:4,ts:data.ts,people:data.people,debts:data.debts});
async function backupText(data){const plain=JSON.stringify(backupObject(data),null,2);return GC.enc?JSON.stringify(await C.encrypt(plain,GC.enc)):plain;}
function download(text,name,type='application/json'){
  const url=URL.createObjectURL(new Blob([text],{type})),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);
}
async function exportBackup(data=dataState(),mark=true){download(await backupText(data),'schulden-'+today()+(mark?'':'-version')+'.json');if(mark)await savePreferences(()=>{P.backupAt=Date.now();});message=t('backupNote');}
async function shareBackup(){
  const file=new File([await backupText(dataState())],'schulden-'+today()+'.json',{type:'application/json'});
  if(!navigator.canShare||!navigator.canShare({files:[file]})){await exportBackup();return;}
  try{await navigator.share({files:[file]});await savePreferences(()=>{P.backupAt=Date.now();});message=t('backupNote');}catch(e){if(e.name!=='AbortError')throw e;}
}
function exportCSV(){
  const cell=s=>{let v=String(s??'');if(/^[\s]*[=+@\-\t\r]/.test(v))v="'"+v;return '"'+v.replace(/"/g,'""')+'"';};
  const rows=[[t('date'),t('person'),t('why'),t('hist'),t('amt'),t('chan'),t('note')]];
  for(const d of S.debts)for(const e of d.h)rows.push([e.dt,per(d.pid)?.name,purpose(d),t(e.k==='init'?(d.dir===1?'gave':'got'):e.k==='pay'?'pay':e.k==='late'?'late':'intE'),inputMoney(C.cents(e.a)*(e.k==='pay'?-1:1)),e.ch?t(e.ch):'',e.n]);
  download('\ufeff'+rows.map(r=>r.map(cell).join(';')).join('\r\n'),'schulden-'+today()+'.csv','text/csv;charset=utf-8');
}
async function parseBackup(text,password,ask=false){
  let raw;try{raw=JSON.parse(text);}catch(e){throw Error('formatError');}
  if(raw.enc){
    if(ask){password=prompt(t('importPassword'));if(password===null)return null;}
    if(!password)throw Error('ghUnreadable');
    try{raw=JSON.parse(await C.decrypt(raw,password));}catch(e){throw Error('ghUnreadable');}
  }
  return C.validate(raw,true);
}
async function importFile(file){
  if(file.size>20000000)throw Error('importSize');
  const data=await parseBackup(await file.text(),GC.enc,true);if(!data)return;
  if(!confirm(t('impc')))return;
  await commit('imp',()=>{pushRecovery(dataState(),'savedLocal');S.people=data.people;S.debts=data.debts;});
  go('home');message=t('saved');
}
function ghConfig(){
  const repo=String(GC.repo||'').trim(),file=String(GC.file||'schulden-backup.json').trim();
  if(!GC.tok||! /^[\w.-]+\/[\w.-]+$/.test(repo)||file.length>200||!file||file.split('/').some(p=>!p||p==='.'||p==='..')||/[?#\\\u0000-\u001f]/.test(file))throw Error('ghSettings');
  return {repo,file,key:repo.toLowerCase()+'/'+file,url:'https://api.github.com/repos/'+repo+'/contents/'+file.split('/').map(encodeURIComponent).join('/')};
}
async function ghRequest(url,options={}){
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);
  try {return await fetch(url,{...options,headers:{Authorization:'Bearer '+GC.tok,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28',...(options.headers||{})},signal:controller.signal,cache:'no-store'});}finally{clearTimeout(timer);}
}
async function verifyPrivate(config){const response=await ghRequest('https://api.github.com/repos/'+config.repo);if(!response.ok)throw Error(t('ghErr')+' HTTP '+response.status);const repo=await response.json();if(repo.private!==true)throw Error('ghPrivate');}
async function ghRead(config){
  const response=await ghRequest(config.url);if(response.status===404)return null;if(!response.ok)throw Error(t('ghErr')+' HTTP '+response.status);
  try{const raw=await response.json();if(typeof raw.content!=='string'||typeof raw.sha!=='string')throw Error();const data=await parseBackup(new TextDecoder().decode(C.un64(raw.content)),GC.enc);return {sha:raw.sha,data};}catch(e){throw Error('ghUnreadable');}
}
function conflict(config,current){go('conflict',{bk:{v:'set',f:{}},conflict:{config,current,remote:current.data}});}
async function recordBase(config,sha,data,backup=false){await savePreferences(()=>{P.bases[config.key]={sha,canonical:C.canonical(data)};if(backup)P.backupAt=Date.now();});}
async function ghUpload(config,current,keepRemote=false){
  await verifyPrivate(config);
  // Saving the recovery copy must succeed BEFORE the remote version can be replaced.
  if(keepRemote)await savePreferences(()=>pushRecovery(current.data,'savedOnline'));
  const data=dataState(),text=await backupText(data);
  const response=await ghRequest(config.url,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:'Schulden-Backup '+today(),content:C.bytes64(new TextEncoder().encode(text)),...(current?{sha:current.sha}:{})})});
  if(response.status===409||response.status===422)throw Error('ghChanged');if(!response.ok)throw Error(t('ghErr')+' HTTP '+response.status);
  const result=await response.json();await recordBase(config,result.content.sha,data,true);go('set',{f:{}});message=t('ghOk');
}
async function ghUseOnline(config,current){
  await verifyPrivate(config);
  const latest=await ghRead(config);if(!latest||latest.sha!==current.sha)throw Error('ghChanged');
  await commit('dn',()=>{pushRecovery(dataState(),'savedLocal');S.people=clone(current.data.people);S.debts=clone(current.data.debts);P.bases[config.key]={sha:current.sha,canonical:C.canonical(current.data)};});
  go('home');message=t('ghOk');
}
async function github(direction){
  const config=ghConfig();await savePreferences(()=>{});await verifyPrivate(config);const current=await ghRead(config),local=C.canonical(dataState());
  if(!current){if(direction==='down'){message=t('ghNo');return;}await ghUpload(config,null);return;}
  const remote=C.canonical(current.data),base=P.bases[config.key]?.canonical;
  if(local===remote){if(direction==='up')await ghUpload(config,current);else{await recordBase(config,current.sha,current.data);message=t('ghOk');}return;}
  if(direction==='up'&&base&&remote===base){await ghUpload(config,current);return;}
  if(direction==='down'&&base&&local===base){if(confirm(t('impc')))await ghUseOnline(config,current);return;}
  conflict(config,current);
}
async function action(a,D){
  switch(a){
    case 'nav':go(D.view,{f:D.view==='set'?{}:undefined});break;
    case 'back':V=V.bk||{v:'home'};failure='';message='';break;
    case 'debt':go('debt',{id:D.id,bk:V});break;
    case 'person':go('person',{id:D.id,bk:V});break;
    case 'new':openDebtForm(null,D.pid);break;
    case 'editDebt':openDebtForm(D.id||V.id);break;
    case 'saveDebt':await saveDebt();break;
    case 'pay':openEvent('pay');break;
    case 'charge':openEvent('int');break;
    case 'editEvent':{const id=D.id||V.id;V={v:'debt',id,bk:{v:'debts'}};openEvent(null,D.eid);break;}
    case 'saveEvent':await saveEvent();break;
    case 'deleteEvent':{if(!confirm(t('deleteEvent')))break;const d=dbt(),candidate=clone(d);candidate.h=candidate.h.filter(e=>e.id!==V.eid);checkChangedDebt(candidate);await commit('remove',()=>{S.debts=S.debts.map(x=>x.id===d.id?candidate:x);});go('debt',{id:d.id,bk:{v:'debts'}});break;}
    case 'post':go('post',{id:V.id,bk:V,f:{due:C.addMonths(dbt().due>today()?dbt().due:today(),1),amt:'0',note:''}});break;
    case 'months':V.f.due=C.addMonths(dbt().due>today()?dbt().due:today(),+D.months);break;
    case 'savePost':{const d=dbt(),f=V.f,value=parseAmount(f.amt||'0',true),amount=f.mode==='pct'?Math.round(Math.max(0,bal(d))*value/10000):value;if(!C.date(f.due)||f.due<d.h[0].dt||(amount&&today()<d.h[0].dt))throw Error('dateError');const candidate=clone(d);candidate.due=f.due;if(amount)candidate.h.push({id:uid(),k:'late',a:amount/100,dt:today(),n:f.note||''});checkChangedDebt(candidate);await commit('post',()=>{S.debts=S.debts.map(x=>x.id===d.id?candidate:x);});V=V.bk;message=t('saved');break;}
    case 'bookInterest':{const d=dbt(),i=C.interest(d,today());if(i.amount<=0)break;if(!confirm(t('bookInterest')+': '+eur(i.amount)+'?'))break;await commit('int',()=>d.h.push({id:uid(),k:'int',a:i.amount/100,dt:today(),n:'',from:i.from,to:i.to}));break;}
    case 'addPerson':{const name=nameCheck(V.f.name);await commit('add',()=>S.people.push({id:uid(),name}));V.f.name='';break;}
    case 'rename':{const name=prompt(t('name'),per(V.id).name);if(name===null)break;const valid=nameCheck(name,V.id);await commit('edit',()=>per(V.id).name=valid);break;}
    case 'deleteDebt':{if(!confirm(t('deleteDebt')))break;const id=V.id;await commit('remove',()=>{S.debts=S.debts.filter(d=>d.id!==id);});go('debts');break;}
    case 'deletePerson':{if(!confirm(t('deletePerson')))break;const id=V.id;await commit('remove',()=>{S.people=S.people.filter(p=>p.id!==id);S.debts=S.debts.filter(d=>d.pid!==id);});go('ppl');break;}
    case 'undo':{if(!P.undo)break;const before=clone(P);try{const data=P.undo.data;S.people=clone(data.people);S.debts=clone(data.debts);S.ts=Date.now();P.undo=null;await write();V={v:'home'};message=t('saved');}catch(e){P=before;sync();throw e;}break;}
    case 'language':await savePreferences(()=>{S.lang=+D.lang;});break;
    case 'lockLanguage':L=+D.lang;S.lang=L;break;
    case 'usernameSave':{const input=$('#credentials-form [name="username"]');const name=username(input?.value??V.f?.username);await savePreferences(()=>{S.username=name;});message=t('saved');break;}
    case 'password':await setPassword(false);break;
    case 'setupPassword':await setPassword(true);break;
    case 'skip':await savePreferences(()=>{S.setup=true;});V={v:'home'};break;
    case 'unlock':await unlock();break;
    case 'lock':await savePreferences(()=>{});lockNow();break;
    case 'export':await exportBackup();break;
    case 'csv':exportCSV();break;
    case 'share':await shareBackup();break;
    case 'import':$('#import-file').click();break;
    case 'ghup':await github('up');break;
    case 'saveAccess':await savePreferences(()=>{});configDirty=false;message=t('saved');break;
    case 'ghdn':await github('down');break;
    case 'conflictLocal':{const {config,current}=V.conflict;await ghUpload(config,current,true);break;}
    case 'conflictOnline':{const {config,current}=V.conflict;await ghUseOnline(config,current);break;}
    case 'recoveryExport':{const r=P.backups.find(r=>r.id===D.rid);await exportBackup(r.data,false);break;}
    case 'recoveryRestore':{if(!confirm(t('impc')))break;const r=P.backups.find(r=>r.id===D.rid);await commit('restore',()=>{const current=dataState();S.people=clone(r.data.people);S.debts=clone(r.data.debts);r.data=current;r.at=Date.now();r.label='savedLocal';});go('home');break;}
    case 'recoveryDelete':if(confirm(t('removeRecovery')))await savePreferences(()=>{P.backups=P.backups.filter(r=>r.id!==D.rid);});break;
  }
}
async function run(work){
  if(busy)return;busy=true;failure='';message='';
  $('#app').querySelectorAll('button,input,select').forEach(e=>{if(!e.matches('input')||!e.closest('#login-form,#credentials-form'))e.disabled=true;});
  try{await work();}catch(e){failure=T[e.message]?t(e.message):t('ghErr')+': '+(e.name==='AbortError'?'Timeout':e.message||e);}
  finally{busy=false;if(lockAfter){lockAfter=false;lockNow();}else render();}
}
document.addEventListener('click',e=>{const el=e.target.closest('[data-a]');if(!el||el.disabled||busy)return;const D={...el.dataset};if(D.a==='import'){$('#import-file').click();return;}run(async()=>{if(configDirty&&!['password','setupPassword'].includes(D.a)){await savePreferences(()=>{});configDirty=false;}await action(D.a,D);});});
document.addEventListener('input',e=>{
  if(e.target.dataset.f){V.f=V.f||{};V.f[e.target.dataset.f]=e.target.value;
    if(e.target.dataset.f==='query'&&['debts','ppl'].includes(V.v)){const start=e.target.selectionStart;render();const input=$('[data-f="query"]');input.focus();input.setSelectionRange(start,start);}
  }
  if(e.target.dataset.g){GC[e.target.dataset.g]=e.target.dataset.g==='enc'?e.target.value:e.target.value.trim();P.settings=GC;configDirty=true;}
});
document.addEventListener('change',e=>{
  if(e.target.id==='import-file'&&e.target.files[0]){const file=e.target.files[0];run(()=>importFile(file));return;}
  if(e.target.dataset.g)return;
  if(['pid','ch','dir','status','mode'].includes(e.target.dataset.f)){V.f[e.target.dataset.f]=e.target.value;render();}
});
document.addEventListener('submit',e=>{if(!['login-form','credentials-form'].includes(e.target.id))return;e.preventDefault();const form=e.target;V.f=V.f||{};for(const name of ['username','password'])V.f[name]=form.elements.namedItem(name)?.value||'';V.f.repeat=form.elements.namedItem('confirmPassword')?.value||'';run(()=>form.id==='credentials-form'?setPassword(false):(!S.setup&&!encrypted)?setPassword(true):unlock());});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&(encrypted||S.pw)){if(busy)lockAfter=true;else if(configDirty){lockAfter=true;run(async()=>{await savePreferences(()=>{});configDirty=false;});}else lockNow();}});
window.addEventListener('offline',()=>render());window.addEventListener('online',()=>render());
window.addEventListener('storage',e=>{if(e.key===KEY&&e.newValue!==disk){failure=t('concurrent');if(encrypted&&!busy)lockNow();else render();}});
async function init(){
  try{
    disk=storageValue();
    if(disk){const record=JSON.parse(disk);if(record.version!==4)throw Error('formatError');knownUsername=username(record.username||'',false);encrypted=record.encrypted===true;if(encrypted){locked=true;P.state.setup=true;}else{P=normalizeBody(record.data);sync();locked=!!S.pw;}}
    else {
      const legacy=localStorage.getItem('sm');
      if(legacy){const old=JSON.parse(legacy),valid=C.validate(old,true);P.state={...valid,lang:old.lang||0,setup:!!old.setup,pw:old.pw||null};try{P.settings=JSON.parse(localStorage.getItem('smgh')||'{}');}catch(e){P.settings={};}sync();locked=!!S.pw;}
    }
  }catch(e){failure=T[e.message]?t(e.message):t('formatError');locked=true;P.state.setup=true;}
  sync();render();
  if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(()=>{});navigator.serviceWorker.addEventListener('controllerchange',()=>{message=t('version');if(!busy)render();});}
}
init();
