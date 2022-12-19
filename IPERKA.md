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
| 6 | M | Funktional |  |

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
| Readme File gestalten und mit Informationen befüllen | Joel | 13.12.2022 | Jeden Arbeitstag 30min | Nein |
| Todo-Liste für das Projekt anpassen und Todos hinzufügen | Janic | 13.12.2022| Jeden Arbeitstag 30min | Nein |
| Funktion um die Todos zu erstellen programmieren | Janic | 16.11.2022 | 45min | Nein |
| Projekt mit Datenbank verbinden | Eduard | 8.11.2022 | 45min | Ja |
| Mockup für die Login Seite erstellen | Janic | 16.11.2022 | 45min | Ja |
| Mockup für die Sign Up Seite erstellen | Janic | 16.11.2022 | 45min | Ja |
| Login Component erstellen und Attribute füllen | Eduard | 16.11.2022 | 45min | Nein |
| Login Funktionen implementieren | Eduard | 16.11.2022 | 45min | Nein |
| Login Daten abspeichern durch Firebase | Eduard | 16.11.2022 | 45min | Nein |
| - | - | - | - |

### Testfallspezifikationen:
| Nummer | Getestete Anforderung | Voraussetzung | Eingabe | Ausgabe |
|:-------------|:-----------------------:|:------------:|:------------:| :------------: |
| 1.1 | 1 | Zwei Handys stehen zurverfügung. Bei beiden ist die App gestartet und man hat sich bei beiden mit dem selben Handy eingeloggt. | To-Do erstellen bei Handy Nr. 1 | Auf beiden Handys sieht man die erstellte Todo. |
| 2.1 | 2 | Die App ist gestartet, man ist eingeloggt und ist auf der To-Do Seite. | Beim Titel:"Homework" und bei der Description:"english prep." schreiben und auf den Button klicken. | Ein To-Do mit dem Titel:"Homework" und der Beschreibung:"english prep." wurde erstellt. |
| 2.2 | 2 | Die App ist gestartet, man ist eingeloggt, ist auf der To-Do Seite und ein test To-Do wurde erstellt. | Auf das Todo klicken bei dem Alert bestätigen klicken. | Das Test To-Do wurde erfolgreich gelöscht. |
| 3.1 | 3 | Die App ist gestartet und man befindet sich auf der Sign Up page. | Benutzernamen, Email und Passwort eingeben und auf "Sign Up" klicken. | Der Account wurde erfolgreich erstellt. |
| 4.1 | 4 | Die App ist gestartet und man befindet sich auf der Log In page. | Email und Passwort eingeben und auf Log In klicken. | Der Benutzer wurde erfolgreich eingeloggt. Man befindet sich nun auf der To-Do page. |

### Mockup Design
![Mockup Design](https://github.com/SomethingLikeAChicken/Native-Todo-List/blob/main/resources/MockupDesign.png)
## Entscheiden:
Die kursiv geschriebenen Option habe ich schlussendlich gewählt.

Welche Technologie soll verwendet werden?
•    *React Native*
•    Android Studio
•    Flutter

Welche Backend Lösung soll verwendet werden?
•    *Firebase*
•    Node.js
•    Spring boot

Welche Datenbank Lösung soll verwendet werden?
•    *Firebase*
•    MongoDB
•    SQL lite


Um die besten Entscheidungen zu treffen, habe ich mehrere Möglichkeiten für jede Frage getestet und die passendste für das finale Projekt verwendet.
## Realisieren:
Schauen Sie sich gerne den rest von diesem Github Repository an um das Projekt zu sehen.
## Kontrollieren:
## Auswerten:
