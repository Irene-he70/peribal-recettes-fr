#!/bin/bash
echo "🚀 Deploying PERIBAL Recettes (French) to GitHub..."
echo ""
echo "Repository: https://github.com/Irene-he70/peribal-recettes-fr"
echo ""

# Create repository via GitHub API (requires token)
curl -X POST https://api.github.com/user/repos \
  -H "Accept: application/vnd.github.v3+json" \
  -d '{"name":"peribal-recettes-fr","description":"PERIBAL French Recipe Website - Recettes de Petit-déjeuner","private":false}'

# Push to GitHub
git push -u origin main

echo ""
echo "✅ Deployment complete!"
echo "🌐 Visit: https://github.com/Irene-he70/peribal-recettes-fr"
