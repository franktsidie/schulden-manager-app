# Schulden-Manager · Version 5

App: https://franktsidie.github.io/schulden-manager-app/

Statische, installierbare Web-App ohne Server-Datenbank oder automatische Synchronisierung. Daten liegen im Browser des jeweiligen Geräts. Der App-Code ist öffentlich; deine Einträge werden nicht mit der Website veröffentlicht.

## Neu

- Centgenaue Berechnung, deutsche/englische/französische Betragseingaben, verständliche Eingabeprüfungen und Schutz vor Überzahlungen.
- Schulden, Personen und Buchungen bearbeiten oder löschen; letzte Datenänderung rückgängig machen. Rückgängig bleibt auch nach Neuladen verfügbar, bis eine weitere Datenänderung erfolgt.
- Suche nach Person oder Verwendungszweck; Filter für offene, überfällige, bald fällige und erledigte Posten sowie Richtung.
- Sichtbarer Backup-Zeitpunkt und Fehlermeldung bei fehlgeschlagenem Speichern.
- Vor Import/Online-Übernahme wird der lokale Stand gesichert. Bei GitHub-Konflikten wird die ersetzte Version auf dem Gerät aufbewahrt. Bis zu fünf Versionen; bei voller Liste wird das Ersetzen blockiert. Gesicherte Versionen herunterladen, wiederherstellen oder entfernen.
- Monatsfristen werden auf den letzten gültigen Tag begrenzt (31. Januar + 1 Monat = 28./29. Februar).
- Einfache Jahreszinsen: tatsächliche Kalendertage / 365 auf den offenen Grundbetrag, ohne Zinseszins. Zahlungen tilgen zuerst gebuchte Gebühren/Zinsen. Der angezeigte Vorschlag ist erst nach ausdrücklichem Buchen Teil der Schuld. Gebuchte Zinsen bleiben feste Beträge; nach rückwirkenden Änderungen prüfen.

## Passwort und Verschlüsselung

Ein neu gesetztes App-Passwort (mindestens 10 Zeichen, mit Wiederholung) verschlüsselt den lokalen Datensatz einschließlich GitHub-Zugangsdaten, Rückgängig und gesicherter Versionen mit AES-GCM / PBKDF2-SHA256. Beim Wechsel aus einer anderen App wird gesperrt. Das Passwort bleibt nur während der entsperrten Sitzung im Arbeitsspeicher.

Bestehende Daten und bisherige Passwortsperren werden übernommen. **Ein altes Passwort ist weiterhin nur eine Bildschirmsperre.** Unter Einstellungen ein neues Passwort festlegen, um echte Verschlüsselung einzuschalten. Die alten Klartext-Speicherschlüssel werden erst nach erfolgreichem Speichern des neuen Datensatzes entfernt.

Ohne App-Passwort bleiben Einträge unverschlüsselt im Browser. GitHub-Token und Backup-Passwort werden dann nicht dauerhaft gespeichert, sondern nur in der laufenden Sitzung gehalten.

Passwörter sicher aufbewahren: Eine Wiederherstellung verschlüsselter Daten ohne das passende Passwort ist nicht möglich. Lokale Verschlüsselung schützt gespeicherte Daten bei gesperrter App; ein kompromittiertes Gerät oder veränderter App-Code wird dadurch nicht abgesichert.

## Backups und GitHub

JSON-Backup und GitHub-Abgleich enthalten Personen und Schulden, keine Zugangsdaten und kein App-Passwort. Ein separates optionales Backup-Passwort in Einstellungen verschlüsselt JSON-Export, Teilen und GitHub-Datei. Das App-Passwort verschlüsselt Exporte nicht automatisch. CSV bleibt unverschlüsselt und ist kein wiederherstellbares Backup.

GitHub-Backups gehören in ein separates **privates Repository**, niemals in dieses öffentliche App-Repository. Die App prüft den Repository-Status. Fine-grained Token ausschließlich für dieses private Repository mit Contents: Read and write verwenden. Repository als Besitzer/Name eintragen. Ein nicht lesbares, ungültiges oder nicht entschlüsselbares Online-Backup wird niemals überschrieben.

Der Abgleich ist manuell. Auf Gerät B vor Änderungen herunterladen, danach hochladen. Bei abweichenden Ständen wählen, welche Version verwendet wird; die andere bleibt auf diesem Gerät unter Gesicherte Versionen erhalten. Ein zwischenzeitlich auf GitHub geänderter Stand wird mittels SHA-Prüfung gegen Überschreiben geschützt.

Regelmäßig Backups außerhalb des Browsers speichern und deren Wiederherstellung prüfen. Der Backup-Zeitpunkt bei Datei-Export bestätigt nur die Übergabe an Browser/Teilen-Menü; prüfe die gespeicherte Datei. Browserdaten löschen entfernt auch lokale Sicherungsversionen.

## Installation und Updates

- iPhone/Safari: Teilen → Zum Home-Bildschirm.
- Android/Chrome: Menü → App installieren bzw. Zum Startbildschirm hinzufügen.
- Nach einem Update online öffnen, schließen und erneut öffnen bzw. neu laden. Browserdaten nicht löschen.

Der Service Worker speichert eine vollständige Version für Offline-Nutzung. Bei Quelländerungen den Cache-Namen in sw.js ändern. Website und Daten-Repository getrennt halten; keine Backups oder Tokens in den App-Code aufnehmen.

## Einfache Anmeldung und Samsung Pass

Unter Einstellungen → Anmeldung einrichten einen Benutzernamen oder eine E-Mail-Adresse eintragen und Benutzernamen speichern wählen. Ein bestehendes Passwort bleibt erhalten. Zum ersten Einrichten Benutzername und Passwort mit Wiederholung angeben. Bei einem alten geschützten Datensatz ohne Benutzernamen ist das bisherige Entsperren weiterhin möglich; beim erfolgreichen Anmelden kann der Benutzername ergänzt werden.

Das Anmeldeformular verwendet name="username", autocomplete="username", name="password", autocomplete="current-password" und einen echten Submit-Button. Neue Passwörter verwenden autocomplete="new-password". Auch automatisch ausgefüllte Werte ohne Eingabe-Ereignis werden direkt aus dem Formular gelesen. Zugangsdaten werden beim Absenden nicht an einen Server gesendet.

Auf dem Galaxy die Website in Samsung Internet öffnen, mit Benutzername und Passwort anmelden und die angebotene Speicherung in Samsung Pass bestätigen. Ob die Speicherung angeboten wird, hängt von Browser-, Geräte- und Samsung-Pass-Einstellungen ab. Der Ablauf mit Samsung Pass wurde nicht auf einem echten Galaxy-Gerät geprüft.

Es bleibt ein lokaler Datensatz je Browserprofil. Der Benutzername wird auf dem Gerät auch als Autofill-Hinweis gespeichert; er ist kein Online-Konto. Kein zusätzlicher Anmeldedienst und keine Passwort-Rücksetzungs-Mail. Die verschlüsselten Daten benötigen weiterhin das passende lokale Passwort oder ein lesbares Backup.