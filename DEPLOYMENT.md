# PERIBAL Recettes - Version Française

## 🌐 Déploiement

Cette version française du site PERIBAL est prête à être déployée.

### Option 1: Déploiement sur Manus Space

1. Activez l'intégration GitHub dans Manus
2. Créez un nouveau repository GitHub
3. Poussez le code vers GitHub
4. Déployez via Manus Space

### Option 2: Déploiement manuel

Le projet est déjà buildé dans le dossier `dist/`.

**Pour démarrer le serveur de production:**
```bash
cd /home/ubuntu/peribal-recettes-fr
pnpm start
```

Le serveur démarre sur le port 3000.

### Caractéristiques

✅ Interface entièrement en français
✅ 28+ recettes de petit-déjeuner traduites
✅ Toutes les catégories (Petit-déjeuner, Pain & Pâtisseries, Dîner)
✅ Filtres et fonctionnalités de recherche
✅ Liste de courses
✅ Export PDF
✅ Design identique à la version allemande
✅ Logo et images PERIBAL

### Structure du projet

- `client/` - Application React frontend
- `server/` - Serveur Express backend
- `dist/` - Build de production
- `client/src/locales/fr/` - Traductions françaises

### Technologies

- React 19 + TypeScript
- Vite
- TailwindCSS
- i18next (internationalisation)
- Express (serveur)

## 📝 Notes

- La langue par défaut est le français (configuré dans `client/src/i18n/config.ts`)
- Tous les textes UI sont traduits
- Les recettes principales sont traduites
- Les images et le logo sont identiques à l'original
