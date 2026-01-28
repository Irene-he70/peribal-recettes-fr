# GitHub Pages Setup - Anleitung

## ✅ Was wurde bereits erledigt

Der `gh-pages` Branch wurde erfolgreich erstellt und zu GitHub gepusht. Alle notwendigen Dateien für die Website sind im Branch enthalten.

## 📋 Nächster Schritt: GitHub Pages aktivieren

Um die Website permanent zu machen, müssen Sie GitHub Pages in den Repository-Einstellungen aktivieren. Das dauert nur 2 Minuten:

### Schritt-für-Schritt Anleitung:

1. **Öffnen Sie die Repository-Einstellungen:**
   - Gehen Sie zu: https://github.com/Irene-he70/peribal-recettes-fr
   - Klicken Sie oben auf den Tab **"Settings"** (Einstellungen)

2. **Navigieren Sie zu Pages:**
   - Scrollen Sie im linken Menü nach unten
   - Klicken Sie auf **"Pages"**

3. **Konfigurieren Sie die Quelle:**
   - Unter "Build and deployment" > "Source"
   - Wählen Sie **"Deploy from a branch"**
   - Branch: Wählen Sie **"gh-pages"**
   - Folder: Wählen Sie **"/ (root)"**
   - Klicken Sie auf **"Save"**

4. **Warten Sie auf das Deployment:**
   - GitHub wird die Website automatisch deployen (dauert 1-2 Minuten)
   - Eine grüne Box erscheint mit der URL Ihrer Website

## 🌐 Ihre permanente URL

Nach der Aktivierung wird Ihre Website verfügbar sein unter:

**https://irene-he70.github.io/peribal-recettes-fr/**

## ✨ Vorteile von GitHub Pages

- ✅ **Kostenlos** - Komplett gratis
- ✅ **Permanent** - Bleibt online, solange das Repository existiert
- ✅ **Automatische Updates** - Bei jedem Push zum gh-pages Branch wird die Website aktualisiert
- ✅ **HTTPS** - Automatisches SSL-Zertifikat
- ✅ **Schnell** - Wird über GitHub's CDN ausgeliefert
- ✅ **Keine Wartung** - GitHub kümmert sich um alles

## 🔄 Website aktualisieren

Um die Website in Zukunft zu aktualisieren:

```bash
# Änderungen am Code vornehmen
# Dann neu builden und deployen:
cd /home/ubuntu/peribal-recettes-fr
pnpm build
git checkout gh-pages
cp -r dist/public/* .
git add -A
git commit -m "Update website"
git push origin gh-pages
```

## 📝 Alternative: Custom Domain

Falls Sie eine eigene Domain verwenden möchten:
1. Fügen Sie eine Datei namens `CNAME` im gh-pages Branch hinzu
2. Inhalt: Ihre Domain (z.B. `recettes.peribal.com`)
3. Konfigurieren Sie DNS-Einträge bei Ihrem Domain-Provider

---

**Status:** ✅ Repository ist bereit - Sie müssen nur noch GitHub Pages aktivieren!
