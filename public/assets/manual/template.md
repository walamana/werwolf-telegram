
<br><br><br>
# Werwölfe<br>für Telegram

<p style="text-align: center">Stadtteilkirche Rosenheim-Inn<br>© 2020</p><br><br><br>
<br><br>

## 1. Einführung

#### 1.1. Regelwerk
Dieses Regelwerk dient dem reibungslosen Spielablauf.
Es soll dabei helfen strittige Fragen zu klären, schließt aber auch nicht aus, dass es im Spiel zu Handlungen und
Ereignissen kommen kann, die durch diese Vorschrift nicht abgedeckt werden. Dennoch ist jedem Spieler
anzuraten die Spielregeln vor Spielbeginn genauestens zu studieren.

#### 1.2. Telegram - Spielgruppen
Gespielt wird auf Telegram. Dabei muss jeder Spieler gemäß Einladungslink
der Werwolf-Spielgruppe beitreten. Bevor die Spielleitung das Spiel mit der Aufstellung von Kandidaten für das Amt des
Bürgermeisters freigibt, werden die Rollen der Dorfbewohner ausgelost und jedem Spieler in einer
persönlichen Nachricht mitgeteilt. Die Spielleitung informiert über angeheftete Nachrichten in Werwolf-Spielgruppe
(Dorfgruppe). Einige Sonderrollen (Werwölfe, Jäger, Jägerhund, Liebespaar, gute und böse Geister) werden,
um sich austauschen zu können, in eigene Sondergruppen eingeteilt. Auf diese Sondergruppen wird in
Kapitel 6 näher eingegangen.

## 2. Zeitlicher Ablauf des Spiels

#### 2.1. Grundlagen zu Tag und Nacht
Das Spiel bezieht sich auf einen realen Tag-Nacht-Kreislauf. Entsprechend treffen sich die Dorfbewohner tagsüber 
über die Werwolf-Spielgruppe (Dorfgruppe) auf einem virtuellen Marktplatz, diskutieren
miteinander, klagen Verdächtige an, stimmen über Schuld und Unschuld ab und lassen die Verurteilten am Abend
hinrichten. Während der Abstimmung der Dorfbewohner ist die Dorfgruppe deaktiviert.

#### 2.2. Tagesablauf in der Dorfgruppe
Der Tag in der Dorfgruppe beginnt um {{model.zeiten.zeit_beginn_tag}} Uhr und endet um {{model.zeiten.zeit_beginn_nacht1}}
Uhr. Mit Einbruch der Nacht nach {{model.zeiten.zeit_beginn_nacht1}} Uhr werden die nachtaktiven Sondergruppen freigeschaltet
(aktiviert). Die Dorfgruppe bleibt nach der Abstimmung nachts deaktiviert.
Die nachfolgende Tabelle 1 visualisiert die einzelnen Zeitabschnitte von der Diskussion unter den Dorfbewohnern über
Anklagen, Plädoyers, Abstimmung bis hin zur Hinrichtung. Diese sind für jeden Spieler bindend.

Tabelle 1: Tagesablauf der Dorfgruppe
|Uhrzeit|Handlung|Bemerkung|
|:------:|:-------:|:--------:|
|<strong>Späte Nacht</strong><br><br><i class="material-icons night2">nights_stay</i><br><br>{{model.zeiten.zeit_beginn_nacht2}} - {{model.zeiten.zeit_ende_rollen_nacht2}} |{{{handlebars @root defaults.zeiten.list_first}}}||
|<strong>Diskussionsphase</strong><br><br><i class="material-icons day">wb_sunny</i><br><br>{{model.zeiten.zeit_beginn_tag}} - {{model.zeiten.zeit_beginn_plaedoyer_klaeger}}| {{{handlebars @root defaults.zeiten.list_second}}}|Bedingungen für gültige Anklagen: siehe Kap. 4|
|<strong>Plädoyers</strong><br><br><i class="material-icons day">wb_sunny</i><br><br>{{model.zeiten.zeit_beginn_plaedoyer_klaeger}} - {{model.zeiten.zeit_beginn_abstimmung}}|{{{handlebars @root defaults.zeiten.list_third}}}|Außer Klägern und Anklagten darf kein anderer Spieler / keine andere Spielerin in die Dorfgruppe schreiben!|
|<strong>Abstimmung</strong><br><br><i class="material-icons dayend">wb_twilight</i><br><br>{{model.zeiten.zeit_beginn_abstimmung}} - {{model.zeiten.zeit_ende_abstimmung}}|{{{handlebars @root defaults.zeiten.list_fourth}}}|Jeder Spieler / Jede Spielerin ist zur Abstimmung verpflichtet!|
|<strong>Frühe Nacht</strong><br><br><i class="material-icons night">nights_stay</i><br><br>{{model.zeiten.zeit_beginn_nacht1}} - {{model.zeiten.zeit_beginn_nacht2}}|{{{handlebars @root defaults.zeiten.list_fifth}}}|Einschränkungen zur Bekanntgabe von Rollen an gute oder böse Geister siehe Kap. 5|

## 3. Grundlegende Regeln

#### 3.1. Ziel des Spiels
Das Spiel endet, sobald eine der beiden Parteien – Dorfbewohner mit guter Gesinnung oder böse Werwölfe
– alle gegnerischen Spieler getötet haben. Auch als toter Spieler hat man gewonnen, wenn 
die eigene Gruppe (z.B. die Dorfbewohner, die Werwölfe) das Spiel gewonnen hat.

#### 3.2. Verhalten der Spieler / Spielerinnen außerhalb des Spiels
Außerhalb der Telegram-Werwolf-Spielgruppe (Dorfgruppe) dürfen sich die Spieler {{#if model.grundlegende_regeln.reden_ausserhalb_des_spiels}}{{else}}keinesfalls{{/if}}
über das Spiel und dessen Verlauf unterhalten. Das Preisgeben der eigenen Rolle ist nicht zulässig.
{{#if model.grundlegende_regeln.reden_außerhalb_des_spiels}}{{else}}Ein
Regelverstoß kann zum Ausschluss vom Spiel zur Folge haben! Die Entscheidung hierüber
ist der Spielleitung vorbehalten.{{/if}}

#### 3.3. Verhalten der Spieler / Spielerinnen innerhalb des Spiels
Innerhalb der Telegram-Werwolf-Spielgruppe darf die eigene Rolle dargelegt werden. Eine Falschaussage über die eigene Identität ist immer zulässig.
Die wortgenaue Weiterleitung einer Information der Spielleitung (z.B. Screenshots, Weiterleitungen) die ein Spieler oder eine Gruppe
per erhalten hat, ist {{#if model.grundlegende_regeln.eindeutige_beweise}}{{else}}**nicht**{{/if}} zulässig.

#### 3.4. Sinnhaftigkeit des Spiels und Respekt
Das Spiel lebt von einer lebendigen Kommunikation. Es ist von Vorteil, wenn sich jede*r nach Möglichkeit so
aktiv wie möglich in das Spiel einbringt, denn das macht dieses Spiel attraktiv und spannend. Es ist jedoch
darauf zu achten, dass die hitziger werdenden Diskussionen frei von Beleidigungen bleiben, damit niemand in
seiner/ihrer Persönlichkeit verletzt wird. Fehlverhalten haben einen Ausschluss vom Spiel zur Folge!

#### 3.5. Die Spielleitung
Die Spielleitung ist verpflichtet, den Spielern klare Informationen zu geben. Sollte es doch zu Unklarheiten kommen, ist 
jeder Spieler aufgefordert nachzufragen. Die Spielleitung gibt während des Spiels keine Handlungstipps für einzelne Figuren.
Im Spiel können immer wieder Situationen stehen, die bisher nicht vom Regelwerk gedeckt sind. Die Spielleitung wird dann
eine Regeländerung verkünden, die möglichst für alle Spielgruppen fair ist.
Auch die Spielleitung ist nicht unfehlbar. Sollte es Anregungen, Fragen, Kritik oder Beschwerden geben, kann die 
Spielleitung jederzeit angeschrieben werden. Jedoch sollten grundsätzlich die Weisungen der Spielleitung befolgt werden.
Fragen oder Unklarheiten sollten grundsätzlich – wenn möglich – vor Beginn des Spiels geklärt werden.

## 4. Justiz in der Dorfgemeinschaft

#### 4.1. Anklagen
Anklagen müssen bis spätestens {{model.zeiten.zeit_beginn_plaedoyer_klaeger}} Uhr bei der Spielleitung angezeigt werden.
Hierfür muss im Chatverlauf
der Dorfgruppe der über @name markierte Name des Angeklagten mit einem Verweis über @Spielleiter
gemeldet werden. Zum Beispiel: „@Spielleitung, ich klage hiermit @Maxiii an.“ Gleichzeitig ist die
Spielleitung auch in einer Privatnachricht über die Anklage zu informieren. Fehlt eine der beiden Informationswege
an die Spielleitung, gilt die Anklage als ungültig. Gültige Anklagen werden von der Spielleitung über eine angeheftete
Nachricht in der Dorfgruppe bekanntgegeben.

{{#if model.justiz.unschuldsvermutung}}#### 4.2. Unschuldsvermutung
Wird bis {{model.zeiten.zeit_beginn_plaedoyer_klaeger}} Uhr nur eine Person angeklagt, so kommt die Unschuldsvermutung zur Anwendung
(„In dubio pro reo – im Zweifel für den Angeklagten“). Eine Verurteilung und Hinrichtung bleiben
an diesem Tag aus.
{{/if}}

#### 4.3. Plädoyers – der / die Angeklagte hat das letzte Wort
Nach {{model.zeiten.zeit_beginn_plaedoyer_klaeger}} Uhr haben zunächst bis
{{model.zeiten.zeit_beginn_plaedoyer_angeklagte}} Uhr die Kläger das Wort.
Hier untermauern sie noch einmal kurz und knapp, in wenigen Sätzen ihre Gründe
für die Anklage. Im Anschluss, zwischen {{model.zeiten.zeit_beginn_plaedoyer_angeklagte}} Uhr
und {{model.zeiten.zeit_beginn_abstimmung}} Uhr,
haben die Angeklagten das Wort. Sie haben damit die Möglichkeit sich zu
verteidigen und gegen die Anklagen zu wehren. In diesem Zeitraum haben
alle anderen Dorfbewohner zu schweigen und dürfen
keinerlei Nachrichten in die Dorfgruppe senden.
Ein Fehlveralten hat die Sperrung des Spielers
für die darauffolgende Nacht und den darauffolgenden Tag bis
{{model.zeiten.zeit_ende_abstimmung}} Uhr zur Folge!

#### 4.4. Abstimmung
Um {{model.zeiten.zeit_beginn_abstimmung}} Uhr startet die Abstimmung, welche der Angeklagten
hingerichtet werden soll. Diese dauert bis {{model.zeiten.zeit_ende_abstimmung}} Uhr.
In diesem Zeitraum wird die Dorfgruppe durch die Spielleitung deaktiviert,
sodass die Spieler keine Nachrichten schreiben können.
1. Jeder Spieler ist verpflichtet an der Abstimmung teilzunehmen und seine Stimme
   für einen der Angeklagten zu geben! Enthaltungen sind nicht möglich!
2. Stimmt ein Spieler nicht ab, so wird dieser ab {{model.zeiten.zeit_ende_abstimmung}} Uhr für die darauffolgende
   Nacht und den darauffolgenden Tag gesperrt und darf keine Nachrichten in die Dorfgruppe oder Sondergruppe schreiben.
3. Die unterste Auswahloption in der Abstimmung heißt grundsätzlich
   „Geister / Gesperrte / Spielleitung“. Diese haben bereits verstorbene Dorfbewohner
   zu nutzen, die sich in den ihrer Gesinnung entsprechenden Geistergruppen befinden,
   sowie Spieler, die aufgrund eines Regelverstoßes, gesperrt sind.

#### 4.5. Sperren von Spielern / Spielerinnen
Stimmt ein Spieler nicht ab oder verstößt er gegen die
geltenden Regeln, wird er für die darauffolgenden 24 Stunden (Nacht + Tag) gesperrt.
Die Sperre eines Spielers wird durch die Spielleitung verhängt und in der
Werwolf-Spielgruppe bekanntgegeben. Das Recht zum Sperren von Spielern in begründeten Fällen,
bleibt der Spielleitung vorbehalten. Ist ein Spieler drei Tage in Folge gesperrt,
so stirbt sein Charakter im Spiel.

## 5. Rollen in der Dorfgemeinschaft

{{#if model.rollen.rollenuebersicht}}
{{#each rollen.evil}}
{{#count amount @root.model.rollen.rollenuebersicht_amount}}![](./assets/roles/{{icon}}.png =50x50){{/count}}
{{/each}}
{{#each rollen.good}}
{{#count amount @root.model.rollen.rollenuebersicht_amount}}![](./assets/roles/{{icon}}.png =50x50){{/count}}
{{/each}}
{{#each rollen.unknown}}
{{#count amount @root.model.rollen.rollenuebersicht_amount}}![](./assets/roles/{{icon}}.png =50x50){{/count}}
{{/each}}
{{/if}}

{{#unless model.rollen.rollenuebersicht_amount}}*Anzahl unbekannt*{{/unless}}

{{#if rollen.evil}}
#### 5.1. Rollen mit böser Gesinnung
Dorfbewohner mit böser oder dunkler Gesinnung sind Werwölfe. Sie setzen sich aus den unten
folgenden Rollen zusammen. Sie gewinnen, wenn alle Dorfbewohner mit guter Gesinnung erfolgreich bekämpft worden sind. 
Sie kennen sich gegenseitig und müssen sich in der nachts aktivierten Sondergruppe „Werwölfe“ über eine 
Telegram-Abstimmung mit der Auswahloption „Spielleiter“
bis spätestens {{model.zeiten.zeit_ende_rollen_nacht1}} Uhr auf ein Opfer einigen,
das von den Werwölfen getötet werden soll. Stirbt ein Werwolf
in der Nacht, so stirbt er erst zu Tagesbeginn und wird in die Gruppe der bösen Geister aufgenommen.

{{#each rollen.evil}}
{{list-number @index}}. **{{name}}** {{handleTemplate @root}}
{{/each}}
{{/if}}

{{#if rollen.good}}
#### 5.2. Rollen mit guter Gesinnung
Dorfbewohner mit guter Gesinnung besitzen verschiedene Fähigkeiten. Sie gewinnen,
wenn sie alle Dorfbewohner mit böser Gesinnung (Werwölfe) erfolgreich bekämpft haben.
Grundsätzlich haben die nachtaktiven Sonderrollen ihre Entscheidung über ihre Fähigkeiten,
wenn nicht anders angegeben, bis spätestens {{model.zeiten.zeit_ende_rollen_nacht1}} Uhr zu treffen
und per Privatnachricht der Spielleitung mitzuteilen.
Stirbt ein Dorfbewohner in der Nacht, so bleibt seine Fähigkeit bis zum Beginn des Tages erhalten.
Der Verstorbene wird erst mit Tagesbeginn in die Geistergruppe aufgenommen.

{{#each rollen.good}}
{{list-number @index}}. **{{name}}** {{handleTemplate @root}}
{{/each}}
{{/if}}

{{#if rollen.unknown}}
#### 5.3. Rollen mit ungewisser Gesinnung
Unter den Dorfbewohnern leben auch Personen, deren Identität nicht eindeutig ist oder sich
während des Spiels verändern kann. Zu diesen zählen der Jägerhund, der Doppelgänger und der Dieb.

{{#each rollen.unknown}}
{{list-number @index}}. **{{name}}** {{handleTemplate @root}}
{{/each}}
{{/if}}

#### 5.4. Eintritt des Todes
Ein Spieler ist offiziell erst dann tot, wenn die Spielleitung den Tod der Person verkündet hat. 
Die Ergebnisse der Rollen (z.B. für den Seher) werden vom Spielleiter regulär zum Beginn des Tages an
die jeweilige Figur gesendet. Sollte die Nachricht früher gesendet werden, darf diejenige Figur diese Information
in der Dorfgruppe nicht verkünden bzw. nutzen.

#### 5.5. Der Bürgermeister / die Bürgermeisterin
Vor der ersten Nacht wählen die Dorfbewohner einen Bürgermeister.
Mitglieder von Sondergruppen (Werwolf- und Jäger-Gruppe) kennen sich vor der Verkündung des Ergebnisses der
Bürgermeisterwahl nicht. Bis spätestens {{model.rollen.buergermeister.zeit_kandidaten}} Uhr haben
sie hierfür Zeit geeignete Kandidaten vorzuschlagen. 
Die Kandidaten müssen entsprechend einer Anklage, siehe Kap. 4.1., im Chatverlauf
der Dorfgruppe mit @name des Kandidaten und per Privatnachricht der Spielleitung gemeldet werden.
Die Kandidaten müssen ebenfalls im Chatverlauf und per Privatnachricht den Vorschlag annehmen,
dass sie sich zum Bürgermeister wählen lassen. Bis spätestens
{{model.rollen.buergermeister.zeit_kandidaten_reden}} Uhr haben die Kandidaten Zeit analog zu Plädoyers, 
siehe Kap. 4.3., Wahlkampf zu betreiben,
bevor ab {{model.rollen.buergermeister.zeit_abstimmung}} Uhr die Abstimmung
beginnt, an der alle Spieler gemäß Kap. 4.4. teilnehmen müssen! Die Abstimmung endet um
{{model.rollen.buergermeister.zeit_abstimmung_ende}} Uhr.
Der neugewählte Bürgermeister ist in den ersten beiden Nächten immun gegen Angriffe von Werwölfen.
Stirbt der Bürgermeister, so folgt die im Testament des verstorbenen Bürgermeisters bestimmte Person im Amt.
Diese ist gegen Werwolfangriffe aber nicht mehr geschützt.

## 6. Spielgruppen - Sondergruppen

#### 6.1. Dorfgruppe
In der Dorfgruppe als Werwolf-Spielgruppe finden Diskussionen und Anklagen von Dorfbewohnern statt.
Hier werden Informationen seitens der Spielleitung bekanntgegeben und Abstimmungen im Rahmen der Justiz durchgeführt.
Während der Abstimmungen wird die Dorfgruppe durch die Spielleitung deaktiviert. 

#### 6.2. Sondergruppen
Einige Sonderrollen werden, um miteinander diskutieren und eine strategische Spielweise besprechen zu können,
in Sondergruppen eingeteilt.

#### 6.2.1. Werwolf-Gruppe
In dieser Gruppe tauschen sich Werwölfe untereinander aus und einigen sich bis spätestens
{{model.zeiten.zeit_ende_rollen_nacht1}} Uhr auf ein Opfer,
das getötet werden soll. Die Abstimmung ist gültig, wenn die mindesten 50% der lebenden Werwölfe abgestimmt hat.
Die Werwolf-Gruppe ist zwischen {{model.zeiten.zeit_beginn_nacht1}} Uhr und
{{model.zeiten.zeit_beginn_tag}} Uhr aktiv, am Tag wird sie durch die Spielleitung deaktiviert.

{{#if model.spielgruppen.jaeger_gruppe.aktiv}}
#### 6.2.2. Jäger-Gruppe
In dieser Gruppe tauschen sich der Jäger und der Jägerhund aus. Mit dem Tod des Jägers 
wird die Gruppe geschlossen, der Jägerhund wechselt zur Werwolf-Gruppe.
{{/if}}

{{#if model.spielgruppen.liebespaar_gruppe.aktiv}}
#### 6.2.3. Liebespaar-Gruppe
Das vom Amor auserwählte Liebespaar trifft sich in der Liebespaar-Gruppe, um sich auszutauschen und taktisches
Vorgehen zu besprechen. Die Gruppe ist sowohl nachts als auch tagsüber aktiv und wird mit dem Tod des Liebespaars
geschlossen. Die wortgenaue Weiterleitung einer Information der Spielleitung in diese Gruppe, die ein Spieler 
per Privatnachricht erhalten hat, ist nicht zulässig.
{{/if}}

{{#if model.spielgruppen.gute_geister.aktiv}}
#### 6.2.4. Gruppe der guten Geister
Nach dem Tod eines Dorfbewohners mit guter Gesinnung gelangt dieser in den Himmel
und wird in der Gruppe der guten Geister aufgenommen. Die guten Geister dürfen jede Nacht ab
{{model.zeiten.zeit_ende_rollen_nacht1}} Uhr eine Nachricht
an eine noch lebende Person ihrer Wahl versenden. Ebenso dürfen sie jede zweite Nacht die Rolle einer noch lebenden
Person ihrer Wahl erraten. Liegen sie dabei richtig, wird die Rolle der Person vom Spielleiter bestätigt. 
Ihre zu verschickende Nachricht haben sie direkt an die Spielleitung zu richten,
die die Nachricht der adressierten Person zustellt. Die Gruppe der guten Geister ist Tag und Nacht aktiv.
{{/if}}

{{#if model.spielgruppen.boese_geister.aktiv}}
#### 6.2.5. Gruppe der bösen Geister
Nach dem Tod eines Dorfbewohners mit böser, dunkler Gesinnung gelangt dieser
in die Gruppe der bösen Geister. Die bösen Geister dürfen jede Nacht eine Nachricht an eine lebende Person ihrer Wahl
versenden. Ebenso dürfen sie jede zweite Nacht die Rolle einer von ihnen ausgewählten, noch lebenden Person erraten.
Liegen sie dabei richtig, wird die Rolle der Person vom Spielleiter bestätigt. Die Gruppe ist
sowohl nachts als auch tagsüber aktiv.
{{/if}}

<br><br>
<span style="text-align:right; display: block">Ganz viel Spaß und Erfolg!
<br>Eure Spielleitung</span>
<br><br>

