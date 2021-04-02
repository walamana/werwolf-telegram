


const defaults = {
    zeiten: {
        list_first: `<ul>
                <li>Werwolf-Gruppe aktiv</li>
                <li>Dorfgruppe {{#if model.spielgruppen.dorfgemeinde.nachtaktiv}}aktiv{{else}}deaktiviert{{/if}}</li>
                <li>Hexe teilt ihre Entscheidung der Spielleitung mit, ob sie heilt, tötet oder nichts unternimmt</li>
                <li>Infizierter Werwolf teilt sein Opfer der Spielleitung mit</li>
                <li>Prediger sendet seine Predigt an die Spielleitung</li>
            </ul>`.replaceAll("\n", ""),
        list_second: `<ul>
                <li>Werwolf-Gruppe deaktiviert</li>
                <li>Dorfgruppe aktiv</li>
                <li>Anklagen möglich</li>
            </ul>`.replaceAll("\n", ""),
        list_third: `<ul>
                <li>Erste Hälfte: Plädoyers der Kläger</li>
                <li>Letzte Hälfte: Plädoyers der Angeklagten</li>
            </ul>`.replaceAll("\n", ""),
        list_fourth: `<ul>
                <li>Abstimmung über Angeklagte</li>
                <li>Dorfgruppe deaktiviert</li>
            </ul>`.replaceAll("\n", ""),
        list_fifth: `<ul>
                <li>Werwolf-Gruppe aktiv</li>
                <li>Dorfgruppe {{#if model.spielgruppen.dorfgemeinde.nachtaktiv}}aktiv{{else}}deaktiviert{{/if}}</li>
                <li>Werwölfe teilen ihre Entscheidung über ein Opfer der Spielleitung mit</li>
                <li>Sonderrollen benennen die Personen der Spielleitung, die sie beschützen oder beobachten wollen</li>
                <li>Geister-Gruppen teilen ihren Wunsch und ihre Nachrichten der Spielleitung mit</li>
            </ul>`.replaceAll("\n", "")
    }
}


export default {
    defaults: defaults,
    template: `
<br><br><br>
# Werwölfe<br>für Telegram

<p style="text-align: center">Stadtteilkirche Rosenheim-Inn<br>© 2020</p><br><br><br>
<br><br>

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
|<i class="material-icons night">nights_stay</i><br><br>{{model.zeiten.zeit_beginn_nacht2}} - {{model.zeiten.zeit_beginn_tag}} |{{{handlebars @root defaults.zeiten.list_first}}}||
|<i class="material-icons day">wb_sunny</i><br><br>{{model.zeiten.zeit_beginn_tag}} - {{model.zeiten.zeit_beginn_plaedoyer_klaeger}}| {{{handlebars @root defaults.zeiten.list_second}}}|Bedingungen für gültige Anklagen: siehe Kap. 4| 
|<i class="material-icons day">wb_sunny</i><br><br>{{model.zeiten.zeit_beginn_plaedoyer_klaeger}} - {{model.zeiten.zeit_beginn_abstimmung}}|{{{handlebars @root defaults.zeiten.list_third}}}|Außer Klägern und Anklagten darf kein anderer Spieler / keine andere Spielerin in die Dorfgruppe schreiben!|
|<i class="material-icons dayend">wb_twilight</i><br><br>{{model.zeiten.zeit_beginn_abstimmung}} - {{model.zeiten.zeit_ende_abstimmung}}|{{{handlebars @root defaults.zeiten.list_fourth}}}|Jeder Spieler / Jede Spielerin ist zur Abstimmung verpflichtet!|
|<i class="material-icons night">nights_stay</i><br><br>{{model.zeiten.zeit_beginn_nacht1}} - {{model.zeiten.zeit_beginn_nacht2}}|{{{handlebars @root defaults.zeiten.list_fifth}}}|Einschränkungen zur Bekanntgabe von Rollen an gute oder böse Geister siehe Kap. 5|

## 3. Grundlegende Regeln

#### 3.1. Ziel des Spiels
Das Spiel endet sobald eine der beiden Parteien – Dorfbewohner mit guter Gesinnung oder böse Werwölfe
 – alle gegnerischen Spieler / Spielerinnen getötet haben. 

#### 3.1. Verhalten der Spieler / Spielerinnen außerhalb des Spiels
Außerhalb der Telegram-Werwolf-Spielgruppe (Dorfgruppe) dürfen sich die Spieler / Spielerinnen {{#if model.grundlegende_regeln.reden_ausserhalb_des_spiels}}{{else}}keinesfalls{{/if}}
über das Spiel und dessen Verlauf unterhalten. Das Preisgeben der eigenen Rolle ist nicht zulässig. 
{{#if model.grundlegende_regeln.reden_außerhalb_des_spiels}}{{else}}Ein 
Regelverstoß kann zum Ausschluss vom Spiel zur Folge haben! Die Entscheidung hierüber 
ist der Spielleitung vorbehalten.{{/if}}

#### 3.2. Verhalten der Spieler / Spielerinnen innerhalb des Spiels
Innerhalb der Telegram-Werwolf-Spielgruppe darf die eigene Rolle dargelegt werden. Eindeutige Beweise hierfür 
(Bsp.: Screenshots, etc.) sind {{#if model.grundlegende_regeln.eindeutige_beweise}}{{else}}jedoch **nicht**{{/if}} zulässig. Eine Falschaussage über die eigene Identität ist zulässig. 

#### 3.4. Sinnhaftigkeit des Spiels und Respekt
Das Spiel lebt von einer lebendigen Kommunikation. Es ist von Vorteil, wenn sich jede*r nach Möglichkeit so
aktiv wie möglich in das Spiel einbringt, denn das macht dieses Spiel attraktiv und spannend. Es ist jedoch 
darauf zu achten, dass die hitziger werdenden Diskussionen frei von Beleidigungen bleiben, damit niemand in 
seiner/ihrer Persönlichkeit verletzt wird. Fehlverhalten haben einen Ausschluss vom Spiel zur Folge!

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
alle anderen Dorfbewohner / Dorfbewohnerinnen zu schweigen und dürfen
keinerlei Nachrichten in die Dorfgruppe senden. 
Ein Fehlveralten hat die Sperrung des Spielers / der Spielerin 
für die darauffolgende Nacht und den darauffolgenden Tag bis
{{model.zeiten.zeit_ende_abstimmung}} Uhr zur Folge! 

#### 4.4. Abstimmung
Um {{model.zeiten.zeit_beginn_abstimmung}} Uhr startet die Abstimmung, welche der Angeklagten 
hingerichtet werden soll. Diese dauert bis {{model.zeiten.zeit_ende_abstimmung}} Uhr. 
In diesem Zeitraum wird die Dorfgruppe durch die Spielleitung deaktiviert,
sodass die Spieler / Spielerinnen keine Nachrichten schreiben können. 
1. Jeder Spieler / jede Spielerin ist verpflichtet an der Abstimmung teilzunehmen und seine / ihre Stimme
 für einen / eine der Angeklagten zu geben! Enthaltungen sind nicht möglich! 
2. Stimmt ein Spieler / eine Spielerin nicht ab, so wird er / sie ab {{model.zeiten.zeit_ende_abstimmung}} Uhr für die darauffolgende 
Nacht und den darauffolgenden Tag gesperrt und darf keine Nachrichten in die Dorfgruppe oder Sondergruppe schreiben.
3. Die unterste Auswahloption in der Abstimmung heißt grundsätzlich 
„Geister / Gesperrte / Spielleitung“. Diese haben bereits verstorbene Dorfbewohner
/ Dorfbewohnerinnen zu nutzen, die sich in den ihrer Gesinnung entsprechenden Geistergruppen befinden, 
sowie Spieler / Spielerinnen, die aufgrund eines Regelverstoßes, gesperrt sind.

#### 4.5. Sperren von Spielern / Spielerinnen  
Stimmt ein Spieler / eine Spielerin nicht ab oder verstößt er / sie gegen die 
geltenden Regeln, wird er / sie für die darauffolgenden 24 Stunden (Nacht + Tag) gesperrt.
Die Sperre eines Spielers / einer Spielerin wird durch die Spielleitung verhängt und in der
Werwolf-Spielgruppe bekanntgegeben. Das Recht zum Sperren von Spielern / Spielerinnen in begründeten Fällen, 
bleibt der Spielleitung vorbehalten. Ist ein Spieler / eine Spielerin drei Tage in Folge gesperrt,
so stirbt sein / ihr Charakter im Spiel. 

## 5. Besondere Rollen in der Dorfgemeinschaft

{{#each rollen.evil}}
{{#count amount}}![](./assets/roles/{{icon}}.png =50x50){{/count}}
{{/each}}
{{#each rollen.good}}
{{#count amount}}![](./assets/roles/{{icon}}.png =50x50){{/count}}
{{/each}}
{{#each rollen.unknown}}
{{#count amount}}![](./assets/roles/{{icon}}.png =50x50){{/count}}
{{/each}}

{{#if rollen.evil}}
#### 5.1. Rollen mit böser Gesinnung
Dorfbewohner / Dorfbewohnerinnen mit böser oder dunkler Gesinnung sind Werwölfe. Sie setzen sich aus den unten
folgenden Rollen zusammen. Sie gewinnen, wenn alle Dorfbewohner / Dorfbewohnerinnen
mit guter Gesinnung erfolgreich bekämpft worden sind. Sie kennen sich gegenseitig und müssen sich in der nachts 
aktivierten Sondergruppe „Werwölfe“ über eine Telegram-Abstimmung mit der Auswahloption „Spielleiter“ 
bis spätestens {{model.zeiten.zeit_ende_rollen_nacht1}} Uhr auf ein Opfer einigen, 
das von den Werwölfen getötet werden soll. Stirbt ein Werwolf 
in der Nacht, so stirbt er erst zu Tagesbeginn und wird in die Gruppe der bösen Geister aufgenommen.

{{#each rollen.evil}}
{{list-number @index}}. **{{name}}** {{handleTemplate @root}}
{{/each}}
{{/if}}

{{#if rollen.good}}
#### 5.2. Rollen mit guter Gesinnung
Dorfbewohner / Dorfbewohnerinnen mit guter Gesinnung besitzen verschiedene Fähigkeiten. Sie gewinnen,
wenn sie alle Dorfbewohner / Dorfbewohnerinnen mit böser Gesinnung (Werwölfe) erfolgreich bekämpft haben. 
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
Unter den Dorfbewohnern / Dorfbewohnerinnen leben auch Personen, deren Identität nicht eindeutig ist oder sich 
während des Spiels verändern kann. Zu diesen zählen der Jägerhund, der Doppelgänger / die Doppelgängerin und der Dieb.

{{#each rollen.unknown}}
{{list-number @index}}. **{{name}}** {{handleTemplate @root}}
{{/each}}
{{/if}}

#### 5.4. Der Bürgermeister / die Bürgermeisterin
Vor der ersten Nacht wählen die Dorfbewohner / Dorfbewohnerinnen einen Bürgermeister / eine Bürgermeisterin. 
Mitglieder von Sondergruppen (Werwolf- und Jäger-Gruppe) kennen sich vor der Verkündung des Ergebnisses der 
Bürgermeisterwahl nicht. Bis spätestens {{model.rollen.buergermeister.zeit_kandidaten}} Uhr haben 
sie hierfür Zeit geeignete Kandidaten / Kandidatinnen 
vorzuschlagen. Die Kandidaten / Kandidatinnen müssen entsprechend einer Anklage, siehe Kap. 4.1., im Chatverlauf
der Dorfgruppe mit @name des Kandidaten / der Kandidatin und per Privatnachricht der Spielleitung gemeldet werden. 
Die Kandidaten / Kandidatinnen müssen ebenfalls im Chatverlauf und per Privatnachricht den Vorschlag annehmen, 
dass sie sich zum Bürgermeister / zur Bürgermeisterin wählen lassen. Bis spätestens 
{{model.rollen.buergermeister.zeit_kandidaten_reden}}  Uhr haben die Kandidaten
/ Kandidatinnen Zeit analog zu Plädoyers, siehe Kap. 4.3., Wahlkampf zu betreiben,
bevor ab {{model.rollen.buergermeister.zeit_abstimmung}} Uhr die Abstimmung
beginnt, an der alle Spieler / Spielerinnen gemäß Kap. 4.4. teilnehmen müssen! Die Abstimmung endet um 
{{model.rollen.buergermeister.zeit_abstimmung_ende}} Uhr.
Der neugewählte Bürgermeister ist in den ersten beiden Nächten immun gegen Angriffe von Werwölfen. 
Stirbt der Bürgermeister, so folgt die im Testament des verstorbenen Bürgermeisters bestimmte Person im Amt. 
Diese ist gegen Werwolfangriffe aber nicht mehr geschützt.

## 6. Spielgruppen - Sondergruppen

#### 6.1. Dorfgruppe
In der Dorfgruppe als Werwolf-Spielgruppe finden Diskussionen und Anklagen von Dorfbewohnern / Dorfbewohnerinnen statt.
Hier werden Informationen seitens der Spielleitung bekanntgegeben und Abstimmungen im Rahmen der Justiz durchgeführt. 
Während der Abstimmungen wird die Dorfgruppe durch die Spielleitung deaktiviert. Außer der Spielleitung dürfen neben 
GIFs keinerlei andere Medien wie Screenshots eingesetzt werden. Die wortgenaue Weiterleitung einer Information der
Spielleitung, die ein Spieler / eine Spielerin per Privatnachricht erhalten hat, ist nicht zulässig.

#### 6.2. Sondergruppen
Einige Sonderrollen werden, um miteinander diskutieren und eine strategische Spielweise besprechen zu können,
in Sondergruppen eingeteilt.

#### 6.2.1. Werwolf-Gruppe
In dieser Gruppe tauschen sich Werwölfe untereinander aus und einigen sich bis spätestens 
{{model.zeiten.zeit_ende_rollen_nacht1}} Uhr auf ein Opfer,
das getötet werden soll. Die Werwolf-Gruppe ist zwischen {{model.zeiten.zeit_beginn_nacht1}} Uhr und 
{{model.zeiten.zeit_beginn_tag}} Uhr aktiv, am Tag wird sie durch
die Spielleitung deaktiviert. Die wortgenaue Weiterleitung einer Information der Spielleitung in diese Gruppe, 
die ein Spieler / eine Spielerin per Privatnachricht erhalten hat, ist nicht zulässig.

{{#if model.spielgruppen.jaeger_gruppe.aktiv}}
#### 6.2.2. Jäger-Gruppe
In dieser Gruppe tauschen sich der Jäger / die Jägerin und der Jägerhund aus. Mit dem Tod des Jägers /
der Jägerin wird die Gruppe geschlossen, der Jägerhund wechselt zur Werwolf-Gruppe. 
Die wortgenaue Weiterleitung einer Information der Spielleitung in diese Gruppe, die ein Spieler /
eine Spielerin per Privatnachricht erhalten hat, ist nicht zulässig.
{{/if}}

{{#if model.spielgruppen.liebespaar_gruppe.aktiv}}
#### 6.2.3. Liebespaar-Gruppe
Das vom Amor auserwählte Liebespaar trifft sich in der Liebespaar-Gruppe, um sich auszutauschen und taktisches 
Vorgehen zu besprechen. Die Gruppe ist sowohl nachts als auch tagsüber aktiv und wird mit dem Tod des Liebespaars 
geschlossen. Die wortgenaue Weiterleitung einer Information der Spielleitung in diese Gruppe, die ein Spieler /
eine Spielerin per Privatnachricht erhalten hat, ist nicht zulässig.
{{/if}}

{{#if model.spielgruppen.gute_geister.aktiv}}
#### 6.2.4. Gruppe der guten Geister
Nach dem Tod eines Dorfbewohners / einer Dorfbewohnerin mit guter Gesinnung gelangt dieser / diese in den Himmel
und wird in der Gruppe der guten Geister aufgenommen. Die guten Geister dürfen jede Nacht ab 
{{model.zeiten.zeit_ende_rollen_nacht1}} Uhr eine Nachricht
an eine noch lebende Person ihrer Wahl versenden. Ebenso dürfen sie jede zweite Nacht die Rolle einer noch lebenden
Person ihrer Wahl erfahren. Ihre zu verschickende Nachricht haben sie direkt an die Spielleitung zu richten, 
die die Nachricht der adressierten Person zustellt. Die Gruppe der guten Geister ist Tag und Nacht aktiv.
{{/if}}

{{#if model.spielgruppen.boese_geister.aktiv}}
#### 6.2.5. Gruppe der bösen Geister
Nach dem Tod eines Dorfbewohners / einer Dorfbewohnerin mit böser, dunkler Gesinnung gelangt dieser / diese 
in die Gruppe der bösen Geister. Die bösen Geister dürfen jede Nacht eine Nachricht ausschließlich an die Werwölfe
versenden. Ebenso dürfen sie jede zweite Nacht die Rolle einer von ihnen ausgewählten, noch lebenden Person raten.
Dies bedeutet, dass die bösen Geister eine Wunschperson namentlich benennen und ihre mögliche Rolle raten müssen.
Die Antwort erfahren sie symbolisch in Form eines nach oben oder nach untern gerichteten Daumens. Die Gruppe ist
sowohl nachts als auch tagsüber aktiv.
{{/if}}

<br><br>
<span style="text-align:right; display: block">Viel Spaß und Erfolg!
<br>Eure Spielleitung</span>
<br><br>

`,
}
