# IPERKA
#### von Holzherr Janic, Berisha Eduard und Fritschi Joel
Schauen Sie sich gerne unser [Readme File](https://github.com/SomethingLikeAChicken/Native-Todo-List/blob/main/README.md "README.md File") an um zu verstehen wie die App funktioniert.
## Informieren:
### Projekt Idee:
Als unser Projekt haben wir uns dazu entschieden, eine Todo-List App zu erstellen. Diese wird wir mit einer Datenbank (via Firebase) versehen um Authentifizierung und eine Persistenzlösung zu haben. Das Design wollen wir generisch lassen und mehr auf die Funktionalität achten als auf das Design. Zudem solle es eine simple App sein, welche keine Übung braucht oder ähnliches.
### Anforderungsanalyse:
| Nummer | Muss/Kann | Funktional/Qualität/Rand- Anforderung | Beschreibung |
|:-------------|:-----------------------:|:------------:|:------------:|
| 1 | M | Funktional | Synchronisierung: Die App sollte es Benutzern ermöglichen, ihre To-Do-Listen auf mehreren Geräten zu synchronisieren, damit sie von überall aus auf ihre Aufgaben zugreifen können. | 
| 2 | M | Funktional | To-Do erstellen und Löschen: Benutzer sollten in der Lage sein, To-Dos zu erstellen und zu löschen. |
| 3 | M | Funktional | Benutzerregistrierung: Die App sollte es Benutzern ermöglichen, sich mit einem Benutzernamen, Email und Passwort zu registrieren. |
| 4 | M | Funktional | Benutzerauthentifizierung: Die App sollte es Benutzern ermöglichen, sich mit einer Email-Adresse und Passwort einzuloggen. |
| 5 | M | Qualität | Benutzerfreundlichkeit: Die App sollte einfach und intuitiv zu bedienen sein, damit Benutzer die Funktionsweise der App sofort verstehen.v |
| 6 | M | Funktional | To-Do bearbeiten: Benutzer sollten in der Lage sein, To-Dos zu bearbeiten. |
| 7 | M | Funktional | Generisches Design: Die App sollte ein generisches Design haben, das bedeutet das mehr auf die Funktionsweise achtet als auf das Design. Desto unkomplizierter desto besser. |

## Planen:
### Todo-Liste mit Arbeitseinteilung
| Arbeitspaket | Verantwortliche Person | Abgabe Datum | Zeitaufwand | Fertig? |
|:-------------|:-----------------------:|:------------:|:------------:| :------------: |
| Projekt erstellen mit React Native | Joel | 1.11.2022 | 30min | Ja |
| Todo-Liste für das Projekt erstellen | Janic | 1.11.2022 | 45min | Ja |
| **Expo Go** installieren | Alle | 1.11.2022 | 20min | Ja |
| Layout für das IPERKA Dokument erstellen | Janic | 8.11.2022 | 45min | Ja |
| Mockup für die Todo Seite erstellen | Janic | 8.11.2022 | 45min | Ja |
| Datenbank mit Firebase einrichten | Eduard | 8.11.2022 | 45min | Ja |
| Readme File gestalten und mit Informationen befüllen | Joel | 13.12.2022 | Jeden Arbeitstag 30min | Ja |
| Todo-Liste für das Projekt anpassen und Todos hinzufügen | Janic | 13.12.2022| Jeden Arbeitstag 30min | Ja |
| Funktion um die Todos zu erstellen programmieren | Janic | 16.11.2022 | 45min | Ja |
| Projekt mit Datenbank verbinden | Eduard | 8.11.2022 | 45min | Ja |
| Mockup für die Login Seite erstellen | Janic | 16.11.2022 | 45min | Ja |
| Mockup für die Sign Up Seite erstellen | Janic | 16.11.2022 | 45min | Ja |
| Login Component erstellen und Attribute füllen | Eduard | 16.11.2022 | 45min | Ja |
| Login Funktionen implementieren | Eduard | 16.11.2022 | 45min | Ja |
| Login Daten abspeichern durch Firebase | Eduard | 16.11.2022 | 45min | Ja |
| HomePage Component erstellen und Attribute füllen | Eduard | 23.11.2022 | 120min | Ja |
| Funktionen erstellen um Eingaben in UseStates zu speichern | Eduard | 23.11.2022 | 100min | Ja |
| Funktionen erstellen um User aus der Homepage auszuloggen | Eduard | 23.11.2022 | 80min | Ja |
| Datenbank anbinden um erstelltes ToDo in Firestore hinzuzufügen | Joel | 30.11.2022 | 120min | Ja |
| Funktion erstellen um die geschriebenen ToDos darzustellen beim laden der Homepage | Joel | 7.12.2022 | 225min | Ja |
| Erstellen eines Alert um ToDos zu ändern und zu löschen | Janic | 14.12.2022 | 80min | Ja |
| Funktion für das bearbeiten der erstellten ToDos | Janic | 14.12.2022 | 120min | Nein |
| Funktion für das löschen der erstellten ToDos | Janic | 14.12.2022 | 180min | Ja |

### Testfallspezifikationen:
| Nummer | Getestete Anforderung | Voraussetzung | Eingabe | Ausgabe |
|:-------------|:-----------------------:|:------------:|:------------:| :------------: |
| 1.1 | 1 | Zwei Handys stehen zurverfügung. Bei beiden ist die App gestartet und man hat sich bei beiden mit dem selben Handy eingeloggt. | To-Do erstellen bei Handy Nr. 1 | Auf beiden Handys sieht man die erstellte Todo. |
| 2.1 | 2 | Die App ist gestartet, man ist eingeloggt und ist auf der To-Do Seite. | Beim Titel:"Homework" und bei der Description:"english prep." schreiben und auf den Button klicken. | Ein To-Do mit dem Titel:"Homework" und der Beschreibung:"english prep." wurde erstellt. |
| 2.2 | 2 | Die App ist gestartet, man ist eingeloggt, ist auf der To-Do Seite und ein test To-Do wurde erstellt. | Auf das Todo klicken bei dem Alert bestätigen klicken. | Das Test To-Do wurde erfolgreich gelöscht. |
| 3.1 | 3 | Die App ist gestartet und man befindet sich auf der Sign Up page. | Benutzernamen, Email und Passwort eingeben und auf "Sign Up" klicken. | Der Account wurde erfolgreich erstellt. |
| 4.1 | 4 | Die App ist gestartet und man befindet sich auf der Log In page. | Email und Passwort eingeben und auf Log In klicken. | Der Benutzer wurde erfolgreich eingeloggt. Man befindet sich nun auf der To-Do page. |
| 6.1 | 6 | Die App ist gestartet, der Benutzer ist eingeloggt, man befindet sich auf der To-Do page und ein Test To-Do wurde erstellt | Das To-Do anklicken und bearbeiten auswählen. Dann die Beschreibung des To-Dos verändern | Das To-Do wurde erfolgreich bearbeitet. |

### Mockup Design
![Mockup Design](https://github.com/SomethingLikeAChicken/Native-Todo-List/blob/main/resources/MockupDesign.png)
## Entscheiden:
Die *kursiv* geschriebenen Option habe ich schlussendlich gewählt.

Welche Technologie soll verwendet werden?
•    *React Native*
•    Android Studio
•    Flutter

Welche Backend Lösung soll verwendet werden?
•    Spring boot
•    Node.js
•    *Firebase*

Welche Persistenzlösung soll verwendet werden?
•    MySQL
•    *Firestore*
•    GraphQL 

Welche Authentifizierungslösung soll verwendet werden?
•    GoogleAuth
•    GithubAuth
•    *Eigene Registrierungsmöglichkeit*


Um die besten Entscheidungen zu treffen, habe ich mehrere Möglichkeiten für jede Frage getestet und die passendste für das finale Projekt verwendet.
## Realisieren:
Schauen Sie sich gerne den rest von diesem Github Repository an um das Projekt zu sehen.
## Kontrollieren:
### Testprotokoll
| Nummer | Getestete Anforderung | Datum | Tester| Resultat | Bemerkungen | Unterschrift |
|:-------------|:-----------------------:|:------------:|:------------:| :------------: | :--:|:--: |
| 1.1 | 1 | 14.12.2022 | Holzherr Janic | OK | - | Holzherr Janic |
| 2.1 | 2 | 14.12.2022 | Holzherr Janic | OK | - | Holzherr Janic |
| 2.2 | 2 | 14.12.2022 | Holzherr Janic | NOK | Die Löschfunktion wirft manchmal Fehlermeldungen aus. | Holzherr Janic |
| 3.1 | 3 | 14.12.2022 | Holzherr Janic | OK | - | Holzherr Janic |
| 4.1 | 4 | 14.12.2022 | Holzherr Janic | OK | - | Holzherr Janic |
| 6.1 | 6 | 14.12.2022 | Holzherr Janic | NOK | Eine bearbeitungs funktion wurde nicht hinzugefügt. | Holzherr Janic |
## Auswerten:
### Fazit
Insgesamt war das Projekt ein großer Erfolg und wir sind stolz darauf, eine funktionierende To-Do-Liste-Anwendung entwickelt zu haben, die alle unsere Anforderungen erfüllt hat bis auf die 6. Anforderung (To-Dos bearbeiten). Wir hatten eine gute Zusammenarbeit in der Gruppe und konnten unsere Aufgaben effektiv verteilen, was dazu beigetragen hat, dass alles reibungslos funktioniert hat.

Es gab jedoch auch eine Anforderung, die nicht vollständig erfüllt wurde. Obwohl wir uns bemüht haben, eine Lösung zu finden, haben wir letztendlich beschlossen, diese Anforderung aus Zeit- und Ressourcengründen bei diesem Projekt zu überspringen. Wir haben jedoch gelernt, dass es wichtig ist, unsere Ressourcen sorgfältig zu verwalten und Prioritäten zu setzen, um sicherzustellen, dass wir unser Bestes geben, um alle Anforderungen zu erfüllen.

Insgesamt war das Projekt eine wertvolle Erfahrung und wir haben viel über die Entwicklung von mobilen Anwendungen gelernt. Wir sind zuversichtlich, dass wir beim nächsten Mal noch besser vorbereitet sein werden und alle Anforderungen erfüllen werden.
