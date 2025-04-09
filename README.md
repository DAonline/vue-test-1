# Testprojekt – Workshop Task Board

Dieses Projekt stellt ein Task Board dar und wurde als Testaufgabe im Rahmen einer Bewerbung erstellt. Es wurde mit Vue 3, TypeScript und TSX realisiert. Ziel des Projekts ist es, verschiedene Frontend-Konzepte und Best Practices zu demonstrieren.

---

## Inhaltsverzeichnis

- [Projektübersicht](#projektübersicht)
- [Installation & Setup](#installation--setup)
- [Verfügbare Befehle](#verfügbare-befehle)
- [Aufgabenübersicht](#aufgabenübersicht)
- [Merge Request Prozess](#merge-request-prozess)

---

## Projektübersicht

Das Task Board bietet folgende Funktionalitäten:

- Darstellung von Aufgaben in übersichtlichen Spalten (z. B. “To Do”, “In Bearbeitung”, “Erledigt”).
- Wiederverwendbare Komponenten, die an verschiedene Anwendungsfälle anpassbar sind.
- Responsive Designs, die für unterschiedliche Bildschirmgrößen optimiert sind.
- Unterstützung moderner Vue 3 Features wie die Composition API und Teleport für modale Dialoge.
- Drag-and-Drop-Funktionalitäten zur intuitiven Verwaltung von Aufgaben.

---

## Installation & Setup

Folgen Sie den folgenden Schritten, um das Projekt lokal einzurichten und auszuführen:

1.  **Abhängigkeiten installieren:**
    Navigieren Sie in das Projektverzeichnis und führen Sie folgenden Befehl aus:

    ```bash
    npm install
    ```

2.  **Entwicklungsserver starten:**
    Startet die Anwendung im Entwicklungsmodus mit Hot-Reload:

    ```bash
    npm run dev
    ```

3.  **Produktionsbuild erstellen:**
    Kompiliert und minimiert das Projekt für den Produktionseinsatz:

    ```bash
    npm run build
    ```

4.  **Vorschau des Produktionsbuilds:**
    Testen Sie den erstellten Build, indem Sie einen lokalen Server starten:

    ```bash
    npm run preview
    ```

5.  **Unit-Tests ausführen:**
    Verifizieren Sie die Funktionalität mittels Vitest:

    ```bash
    npm run test:unit
    ```

6.  **Code linten:**
    Prüfen Sie den Code auf Stil- und Syntaxfehler mit ESLint und Oxlint:

    ```bash
    npm run lint
    ```

7.  **Code formatieren:**
    Formatieren Sie den Code automatisch mit Prettier:
    ```bash
    npm run format
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

Die Aufgaben im Rahmen dieses Workshops sind in einzelne Schritte unterteilt. Jede Aufgabe hat eine eindeutige ID und einen Status:

- **[x] 1 – Projekt Setup:**
  - **Beschreibung:** Initialisieren des Vue-Projekts mit TypeScript und TSX.
  - **Status:** Abgeschlossen.
- **[/] 2 – Wiederverwendbare Komponenten:**
  - **Beschreibung:** Erstellen von modularen, wiederverwendbaren Task-Komponenten für das Task Board.
  - **Status:** In Bearbeitung.
- **[ ] 3 – Styling:**
  - **Beschreibung:** Implementieren von responsiven CSS-Stilen, um das Task Board für verschiedene Bildschirmgrößen zu optimieren.
  - **Status:** Offen.
- **[ ] 4 – Composition API:**
  - **Beschreibung:** Auslagern der Task-Logik in die Composition API, um den Code modular und wartbar zu gestalten.
  - **Status:** Offen.
- **[ ] 5 – Drag and Drop:**
  - **Beschreibung:** Hinzufügen einer Drag-and-Drop-Funktionalität, damit Aufgaben per Drag & Drop zwischen den Spalten verschoben werden können.
  - **Status:** Offen.
- **[ ] 6 – Kontextmenü:**
  - **Beschreibung:** Implementierung eines Kontextmenüs für Aufgaben, mit dem der Aufgabenstatus geändert werden kann.
  - **Status:** Offen.
- **[ ] 7 – Teleportiertes Modal für neue Aufgaben:**
  - **Beschreibung:** Einsatz von Vue Teleport, um ein modales Dialogfenster außerhalb der Hauptkomponente zu rendern. Das Modal soll die Eingabe von Aufgabendetails ermöglichen und Aufgaben standardmäßig dem “To Do”-Status zuordnen. Es muss sich schließen, wenn außerhalb geklickt wird oder der Benutzer den Vorgang abbricht.
  - **Status:** Offen.
- **[ ] 8 – Validierung:**
  - **Beschreibung:** Sicherstellen, dass keine leeren Aufgaben erstellt werden können.
  - **Status:** Offen.
- **[ ] 9 – Testing:**
  - **Beschreibung:** Ergänzung von Unit-Tests, um zu überprüfen, dass das Hinzufügen leerer Aufgaben nicht möglich ist, während das Hinzufügen von Aufgaben mit gültigen Daten funktioniert.
  - **Status:** Offen.

**Hinweis:** Die Statusangaben (abgeschlossen, in Bearbeitung, offen) dienen als Orientierung und beschreiben den IST-Zustand dieses Branches. Sollte es Änderungen geben, wird es entsprechend angepasst.

---

## Merge Request Prozess

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
    Erstellen Sie einen Merge Request (MR) von Ihrem Feature-Branch zum `main` (oder Zielbranch).
    **Hinweis:** Beschreiben Sie im MR detailliert die vorgenommenen Änderungen und listen Sie die bearbeiteten Aufgaben auf.

6.  **Review und Feedback:**
    Weisen Sie den Merge Request zur Überprüfung an die zuständigen Teammitglieder zu. Nehmen Sie gegebenenfalls Feedback an und passen Sie Ihren Code an.

---
