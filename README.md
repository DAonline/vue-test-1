# Testprojekt – Workshop Task Board

Dieses Projekt stellt ein Task Board dar und wurde als Testaufgabe im Rahmen einer Bewerbung erstellt. Es wurde mit Vue 3, TypeScript und TSX realisiert. Ziel des Projekts ist es, verschiedene Frontend-Konzepte und Best Practices zu demonstrieren.

---

## Inhaltsverzeichnis

- [Projektübersicht](#projektübersicht)
- [Installation & Setup](#installation--setup)
- [Voraussetzungen](#voraussetzungen)
- [Installation & Setup](#installation--setup)
- [Verfügbare Befehle](#verfügbare-befehle)
- [Aufgabenübersicht](#aufgabenübersicht)
- [Merge Request Prozess](#merge-request-prozess)

---

## Projektübersicht

Das Task Board bietet folgende Funktionalitäten:

- Darstellung von Aufgaben in übersichtlichen Spalten (z. B. "To Do", "In Bearbeitung", "Erledigt").
- Wiederverwendbare Komponenten, die an verschiedene Anwendungsfälle anpassbar sind.
- Responsive Designs, die für unterschiedliche Bildschirmgrößen optimiert sind.
- Unterstützung moderner Vue 3 Features wie die Composition API und Teleport für modale Dialoge.
- Drag-and-Drop-Funktionalitäten zur intuitiven Verwaltung von Aufgaben.

---
 
## Voraussetzungen
 
Bevor Sie beginnen, stellen Sie sicher, dass die folgenden Tools auf Ihrem System installiert sind:
 
- **Node.js:** Version 18.x oder höher empfohlen. Sie können Node.js von [nodejs.org](https://nodejs.org/) herunterladen.
- **npm:** Wird normalerweise zusammen mit Node.js installiert. Überprüfen Sie die Installation mit `npm -v`.
 
---
 
## Installation & Setup

Folgen Sie den folgenden Schritten, um das Projekt lokal einzurichten und auszuführen:

1. **Projekt runterladen/clonen:**
    Führe git clone aus:
    ```bash
    git clone https://github.com/DAonline/vue-test-1.git
    cd vue-test-1
    ```

2.  **Abhängigkeiten installieren:**
    Navigieren Sie in das Projektverzeichnis und führen Sie folgenden Befehl aus:

    ```bash
    npm install
    ```

3.  **Entwicklungsserver starten:**
    Startet die Anwendung im Entwicklungsmodus mit Hot-Reload:

    ```bash
    npm run dev
    ```

---

## Verfügbare Befehle

| Befehl              | Beschreibung                                                      |
| :------------------ | :---------------------------------------------------------------- |
| `npm install`       | Installiert alle nötigen Abhängigkeiten.                          |
| `npm run dev`       | Startet den Entwicklungsserver mit Hot-Reload.                    |
| `npm run build`     | Erzeugt einen Produktionsbuild.                                   |
| `npm run preview`   | Startet einen lokalen Server zur Vorschau des Produktionsbuilds.  |
| `npm run test:unit` | Führt Unit-Tests mit Vitest durch.                                |
| `npm run lint`      | Überprüft den Code auf Formatierungs- und Syntaxfehler.           |
| `npm run format`    | Formatiert den Code automatisch gemäß der Prettier-Konfiguration. |

---

## Aufgabenübersicht

Die Aufgaben im Rahmen dieses Tests sind in der folgenden Tabelle zusammengefasst:

| ID | Titel | Beschreibung | Status |
|:--|:------|:-------------|:-------|
| 1 | Projekt Setup | Initialisieren des Vue-Projekts mit TypeScript und | Abgeschlossen |
| 2 | Wiederverwendbare Komponenten | Erstellen von modularen, wiederverwendbaren Task-Komponenten für das Task Board. | In Bearbeitung |
| 3 | Styling | Implementieren von responsiven CSS-Stilen, um das Task Board für verschiedene Bildschirmgrößen zu optimieren. (Bonus) Task Karten mit Styles verbessern. | Offen |
| 4 | Composition API | Auslagern der Task-Logik in die Composition API, um den Code modular und wartbar zu gestalten. | Offen |
| 5 | Drag and Drop | Hinzufügen einer Drag-and-Drop-Funktionalität, damit Aufgaben per Drag & Drop zwischen den Spalten verschoben werden können. | Offen |
| 6 | Kontextmenü | Implementierung eines Kontextmenüs für Aufgaben, mit dem der Aufgabenstatus geändert werden kann. | Offen |
| 7 | Teleportiertes Modal für neue Aufgaben | Einsatz von Vue Teleport, um ein modales Dialogfenster außerhalb der Hauptkomponente zu rendern. Das Modal soll die Eingabe von Aufgabendetails ermöglichen und Aufgaben standardmäßig dem "To Do"-Status zuordnen. Es muss sich schließen, wenn außerhalb geklickt wird oder der Benutzer den Vorgang abbricht. | Offen |
| 8 | Validierung | Sicherstellen, dass keine leeren Aufgaben erstellt werden können. | Offen |
| 9 | Testing | Ergänzung von Unit-Tests, um zu überprüfen, dass das Hinzufügen leerer Aufgaben nicht möglich ist, während das Hinzufügen von Aufgaben mit gültigen Daten funktioniert. | Offen |

**Hinweis:** Die Statusangaben dienen als Orientierung und beschreiben den IST-Zustand dieses Branches. Sollte es Änderungen geben, wird es entsprechend angepasst.

---

## Pull Request Prozess

Um einen strukturierten und nachvollziehbaren Arbeitsablauf zu gewährleisten, beachten Sie bitte folgendes Vorgehen:

1.  **Neuen Branch erstellen:**
    Starten Sie von dem aktuellen `main` (oder dem entsprechenden Basisbranch) einen neuen Branch für Ihre Funktionserweiterung. Zum Beispiel:

    ```bash
    git checkout main
    git pull origin main
    git checkout -b feature/test1-your_name
    ```

2.  **Änderungen implementieren:**
    Arbeiten Sie an den zugewiesenen Aufgaben, und implementieren Sie Ihre Änderungen in Ihrem Branch.

3.  **Regelmäßige Commits:**
    Committen Sie Ihre Änderungen in sinnvollen, nachvollziehbaren Schritten mit aussagekräftigen Commit-Nachrichten.

4.  **Branch pushen:**
    Nach Abschluss oder in regelmäßigen Abständen pushen Sie Ihren Branch ins zentrale Repository:

    ```bash
    git push origin feature/test1-your_name
    ```

5.  **Merge Request erstellen:**
    Erstellen Sie einen Pull Request (PR) von Ihrem Feature-Branch zum `main` (oder Zielbranch).
    **Hinweis:** Beschreiben Sie im PR detailliert die vorgenommenen Änderungen und listen Sie die bearbeiteten Aufgaben auf.

---
