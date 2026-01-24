# PERIBAL Frühstücksrezepte - Design-Brainstorming

## Gewähltes Design-Konzept: **Wellness-Minimalism mit Grün-Akzenten**

### Design-Philosophie
Ein elegantes, modernes Design, das die Gesundheit und Balance von PERIBAL widerspiegelt. Das Design nutzt die PERIBAL-Brandfarben (#C8CD8A, #B8C34B, #2F5903) als primäre Elemente, kombiniert mit viel Whitespace und einer klaren Typografie für ein Premium-Gefühl.

### Kern-Prinzipien
1. **Natürlichkeit & Gesundheit**: Die grünen Farbtöne symbolisieren Natur, Gesundheit und Balance
2. **Klarheit & Einfachheit**: Minimales Design mit fokussiertem Inhalt
3. **Funktionalität**: Intuitive Navigation, schnelle Filterung, einfache Druckfunktion
4. **Premium-Gefühl**: Hochwertige Typografie, großzügiger Whitespace, subtile Animationen

### Farbphilosophie
- **Primär**: #2F5903 (Dunkelgrün) - Vertrauenswürdig, Natur, Kraft
- **Sekundär**: #B8C34B (Hellgrün) - Frisch, Energie, Leichtigkeit
- **Akzent**: #C8CD8A (Sehr hellgrün) - Subtil, Hintergrund, Highlights
- **Neutral**: Weiß, Grautöne für maximale Lesbarkeit

### Layout-Paradigma
- **Header**: Sticky Navigation mit PERIBAL-Logo und Filtermöglichkeiten
- **Hero-Section**: Großes Bannerbild mit Willkommensbotschaft
- **Rezept-Katalog**: Grid-Layout (2-3 Spalten) mit Rezeptkarten
- **Rezept-Detail**: Vollbild-Ansicht mit Bild, Zutaten, Nährwertangaben
- **Sidebar-Filter**: Rechts angebrachte Filtermöglichkeiten (Typ, Zeit, Favoriten)

### Signature Elements
1. **Grüne Akzent-Linien**: Subtile horizontale Linien in Hellgrün als Trennelemente
2. **Rezept-Karten**: Mit Schattenwurf, Hover-Effekt, Bild-Overlay
3. **Nährwert-Badges**: Kleine, runde Badges für Kohlenhydrate, Eiweiß, Fette

### Interaktions-Philosophie
- **Smooth Hover-Effekte**: Rezeptkarten heben sich leicht an, Farben ändern sich subtil
- **Schnelle Filterung**: Keine Seiten-Neuladen, nur Filtern und Anzeigen
- **Favoriten-Animation**: Herz-Icon mit Animations-Effekt beim Anklicken
- **Druck-Vorschau**: Modal mit Vorschau vor dem Drucken

### Animation
- **Fade-In**: Rezepte erscheinen mit sanftem Fade-In beim Laden
- **Hover-Lift**: Rezeptkarten heben sich bei Hover um 4px an
- **Smooth Transitions**: Alle Farbänderungen mit 200ms Transition
- **Pulse-Animation**: Favoriten-Button pulsiert kurz beim Anklicken

### Typografie-System
- **Display**: "Playfair Display" (Google Fonts) - Elegant, Großtitel
- **Body**: "Inter" - Modern, Lesbar, Sekundärtexte
- **Monospace**: "Courier New" - Nährwertangaben, Technische Daten

### Spezifische Komponenten
1. **Rezept-Karten**: 
   - Bild oben (100% Breite)
   - Titel und Kurzbeschreibung
   - Badges für Zubereitungszeit, Typ (süßlich/herzhaft)
   - Hover-Effekt mit Schatten

2. **Filter-Sidebar**:
   - Checkbox für "Süßlich" / "Herzhaft"
   - Slider für Zubereitungszeit (5-30 Minuten)
   - Checkbox für "Nur Favoriten"
   - "Filter zurücksetzen" Button

3. **Rezept-Detail-Modal**:
   - Großes Bild oben
   - Nährwertangaben in Tabelle
   - Zutaten als Liste
   - Zubereitungsanleitung als nummerierte Liste
   - Druck- und Favoriten-Buttons

4. **Einkaufsliste**:
   - Modal mit allen Zutaten aus gefilterten Rezepten
   - Checkboxen zum Abhaken
   - "In Zwischenablage kopieren" Button
