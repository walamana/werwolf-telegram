
## 1. Einführung

#### 1.1. Regelwerk
Dieses Regelwerk dient dem reibungslosen Spielablauf. 
Es soll dabei helfen strittige Fragen zu klären, schließt aber auch nicht aus, dass es im Spiel zu Handlungen und 
Ereignissen kommen kann, die durch diese Vorschrift nicht abgedeckt werden. Dennoch ist jedem Spieler / jeder Spielerin 
anzuraten die Spielregeln vor Spielbeginn genauestens zu studieren.

#### 1.2. Telegram - Spielgruppen
Die Teilnahme am Spiel ist online über Telegram möglich. Dabei muss jeder Spieler / jede Spielerin gemäß Einladungslink
der Werwolf-Spielgruppe beitreten. Bevor die Spielleitung das Spiel mit der Aufstellung von Kandidaten für das Amt des
Bürgermeisters freigibt, werden die Rollen der Dorfbewohner ausgelost und jedem Spieler / jeder Spielerin in einer
persönlichen Nachricht mitgeteilt. Die Spielleitung informiert über angeheftete Nachrichten in Werwolf-Spielgruppe
(Dorfgruppe). Einige Sonderrollen (Werwölfe, Jäger / Jägerin, Jägerhund, Liebespaar, gute und böse Geister) werden,
um sich austauschen zu können, in eigene Sondergruppen eingeteilt. Auf diese Sondergruppen wird in
Kapitel 6 näher eingegangen.

## 2. Zeitlicher Ablauf des Spiels

#### 2.1. Grundlagen zu Tag und Nacht
Das Spiel bezieht sich auf einen realen Tag-Nacht-Kreislauf. Entsprechend treffen sich die Dorfbewohner / 
Dorfbewohnerinnen tagsüber über die Werwolf-Spielgruppe (Dorfgruppe) auf einem virtuellen Marktplatz, diskutieren
miteinander, klagen Verdächtige an, stimmen über Schuld und Unschuld ab und lassen die Verurteilten am Abend 
hinrichten. Während der Abstimmung der Dorfbewohner / Dorfbewohnerinnen ist die Dorfgruppe deaktiviert.

#### 2.2. Tagesablauf in der Dorfgruppe
Der Tag in der Dorfgruppe beginnt um {{model.zeiten.zeit_beginn_tag}} Uhr und endet um {{model.zeiten.zeit_beginn_nacht1}} 
Uhr. Mit Einbruch der Nacht nach {{model.zeiten.zeit_beginn_nacht1}} Uhr werden die nachtaktiven Sondergruppen freigeschaltet 
(aktiviert). Die Dorfgruppe bleibt nach der Abstimmung nachts deaktiviert. 
Die nachfolgende Tabelle 1 visualisiert die einzelnen Zeitabschnitte von der Diskussion
unter den Dorfbewohnern / Dorfbewohnerinnen über Anklagen, Plädoyers, Abstimmung bis hin zur Hinrichtung. Diese sind 
für jeden Spieler / jede Spielerin bindend.

Tabelle 1: Tagesablauf der Dorfgruppe
|Uhrzeit|Handlung|Bemerkung|
|:------:|:-------:|:--------:|
| {{model.zeiten.zeit_beginn_nacht2}} - {{model.zeiten.zeit_beginn_tag}} |${defaults.zeiten.list_first}||
| {{model.zeiten.zeit_beginn_tag}} - {{model.zeiten.zeit_beginn_plaedoyer_klaeger}}| {{{defaults.zeiten.list_second}}}|Bedingungen für gültige Anklagen: siehe Kap. 4| 
| {{model.zeiten.zeit_beginn_plaedoyer_klaeger}} - {{model.zeiten.zeit_beginn_abstimmung}}|{{{defaults.zeiten.list_third}}}|Außer Klägern und Anklagten darf kein anderer Spieler / keine andere Spielerin in die Dorfgruppe schreiben!|
| {{model.zeiten.zeit_beginn_abstimmung}} - {{model.zeiten.zeit_ende_abstimmung}}|{{{defaults.zeiten.list_fourth}}}|Jeder Spieler / Jede Spielerin ist zur Abstimmung verpflichtet!|
| {{model.zeiten.zeit_beginn_nacht1}} - {{model.zeiten.zeit_beginn_nacht2}}|${defaults.zeiten.list_fifth}|Einschränkungen zur Bekanntgabe von Rollen an gute oder böse Geister siehe Kap. 5|

## 3. Grundlegende Regeln

#### 3.1. Ziel des Spiels
Das Spiel endet sobald eine der beiden Parteien – Dorfbewohner mit guter Gesinnung oder böse Werwölfe
 – alle gegnerischen Spieler / Spielerinnen getötet haben. 

#### 3.1. Verhalten der Spieler / Spielerinnen außerhalb des Spiels
Außerhalb der Telegram-Werwolf-Spielgruppe (Dorfgruppe) dürfen sich die Spieler / Spielerinnen keinesfalls
über das Spiel und dessen Verlauf unterhalten. Das Preisgeben der eigenen Rolle ist nicht zulässig. 
Ein Regelverstoß kann zum Ausschluss vom Spiel zur Folge haben! Die Entscheidung hierüber 
ist der Spielleitung vorbehalten.

#### 3.2. Verhalten der Spieler / Spielerinnen innerhalb des Spiels
Innerhalb der Telegram-Werwolf-Spielgruppe darf die eigene Rolle dargelegt werden. Eindeutige Beweise hierfür 
(Bsp.: Screenshots, etc.) sind {{#if model.grundlegende_regeln.eindeutige_beweise}}{{else}}jedoch **nicht**{{/if}} 
zulässig. Ebenso ist auch eine Falschaussage über die eigene Identität zulässig. 

#### 3.4. Sinnhaftigkeit des Spiels und Respekt
Das Spiel lebt von einer lebendigen Kommunikation. Es ist von Vorteil, wenn sich jede*r nach Möglichkeit so
aktiv wie möglich in das Spiel einbringt, denn das macht dieses Spiel attraktiv und spannend. Es ist jedoch 
darauf zu achten, dass die hitziger werdenden Diskussionen frei von Beleidigungen bleiben, damit niemand in 
seiner/ihrer Persönlichkeit verletzt wird. Fehlverhalten haben einen Ausschluss vom Spiel zur Folge!

## 4. Justiz in der Dorfgemeinschaft

**TODO!**

## 5. Besondere Rollen in der Dorfgemeinschaft

#### 5.1. Rollen mit böser Gesinnung
Dorfbewohner / Dorfbewohnerinnen mit böser oder dunkler Gesinnung sind Werwölfe. Sie setzen sich aus den unten
folgenden Rollen zusammen. Sie gewinnen, wenn alle Dorfbewohner / Dorfbewohnerinnen
mit guter Gesinnung erfolgreich bekämpft worden sind. Sie kennen sich gegenseitig und müssen sich in der nachts 
aktivierten Sondergruppe „Werwölfe“ über eine Telegram-Abstimmung mit der Auswahloption „Spielleiter“ 
bis spätestens 22:00 Uhr auf ein Opfer einigen, das von den Werwölfen getötet werden soll. Stirbt ein Werwolf 
in der Nacht, so stirbt er erst zu Tagesbeginn und wird in die Gruppe der bösen Geister aufgenommen.

{{#each rollen.evil}}
{{list-number @index}}. **{{name}}** {{handleTemplate}}
{{/each}}

#### 5.2. Rollen mit guter Gesinnung
Dorfbewohner / Dorfbewohnerinnen mit guter Gesinnung besitzen verschiedene Fähigkeiten. Sie gewinnen, wenn sie alle Dorfbewohner / Dorfbewohnerinnen mit böser Gesinnung (Werwölfe) erfolgreich bekämpft haben. Zu den Dorfbewohnern / Dorfbewohnerinnen mit guter Gesinnung gehören der Seher / die Seherin, die Hexe, der Jäger / die Jägerin, der / die Aussätzige, der Amor, der Prediger / die Predigerin, der Wächter / die Wächterin, der Messias und die reine Seele. Grundsätzlich haben die nachtaktiven Sonderrollen ihre Entscheidung über ihre Fähigkeiten, wenn nicht anders angegeben, bis spätestens 22:00 Uhr zu treffen und per Privatnachricht der Spielleitung mitzuteilen. Stirbt ein Dorfbewohner in der Nacht, so bleibt seine Fähigkeit bis zum Beginn des Tages erhalten. Der Verstorbene wird erst mit Tagesbeginn in die Geistergruppe aufgenommen. 

{{#each rollen.good}}
{{list-number @index}}. **{{name}}** {{handleTemplate}}
{{/each}}

