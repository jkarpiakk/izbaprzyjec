# Izba Przyjęć

## Jak wdrożyć

### Vercel
1. Zaloguj się i kliknij **New Project** > Import z GitHub.
2. Ustaw ENV vars w Settings (NEXT_PUBLIC_FIREBASE...).
3. Deploy.

### GitHub Pages
1. next.config.js -> output: 'export'
2. npm install && npm run build && npm run export
3. Skopiuj out/ do gh-pages/docs.
4. Włącz Pages.
