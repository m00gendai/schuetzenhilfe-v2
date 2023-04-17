# Schützenhilfe

Schützenhilfe ist eine Applikation zur Unterstützung eines Sportschützen, mit Fokus auf den Schweizer Schiesssport.
Es ist als Webapplikation entwickelt und für Mobilgeräte im Portrait-Modus optimiert.

## Gliederung

Die Hauptansicht ist in drei Teilbereiche gegliedert:
- Zielbild
  - Stellt die momentan ausgewählte Zielscheibe so dar, dass dessen Trefferzentrum (nicht Scheibenzentrum!) mittig ist
  - Stellt bei antippen Treffer in 10er-Wertung dar
- Optionsbereich
  - Enthält die Funktionen Optionsmenü / Trefferanzeige 100er-Wertung / Hilfemenü
  - Die Funktion optionsmenü öffnet das Optionsmenü
  - Die Trefferanzeige zeigt nach Antippen der Scheibe den Treffer in 100er-Wertung an
  - Die Funktion Hilfemenü öffnet dsa Hilfemenü
- Aktionsbereich
  - Zeigt ausgewählte Waffe, eingestellte Distanz, ausgewähltes Scheibenbild
  - Zeigt (nach Antippen auf das Scheibenbild) an, welche Korrekturschritte an der Visierung der ausgewählten Waffe nötig sind, um möglichst dich ans Trefferzentrum zu kommen
  - Zeigt tabellarisch die Herstellerangabe und Referenzdistanz zu den Verstellschritten der ausgewählten Waffe
  - Zeigt tabellarisch die auf die eingestellte Distanz gerechneten Verstellschritte der ausgewählten Waffe 
  
### Optionsmenü

Das Optionsmenü gliedert sich in drei Bereiche:
- Scheibenauswahl
  - Durch Antippen des jeweiligen Scheibenbildes wird dieses aktiv
  - Die Scheiben sind nach Disziplin geordnet
- Waffenauswahl
  - Durch Antippen der jeweiligen Waffe wird diese aktiv
  - Die Waffen sind nach Typ geordnet
- Faktorenauswahl
  - Die gewünschte Distanz in Meter kann eingegeben werden

### Hilfemenü

Das Hilfemenü gliedert sich in folgende Bereiche:
- Modus Zeiger
  - Der Standardmodus der Applikation wird erklärt
- Visierverstellungen
  - Erklärt das Vorgehen zur Visierverstellung verschiedener Waffen
- Über
  - Informationen über die Applikation an sich
    
## Technisch

Die Applikation ist in (funktionalem) React 18 mit Typescript und Module-CSS geschrieben und nutzt Vite als Build-Tool.
Teilweise werden Material UI Icons verwendet.
Details siehe ```package.json```.
Die Applikation ist als komplett statischer Export auf jedem Webserver lauffähig.
