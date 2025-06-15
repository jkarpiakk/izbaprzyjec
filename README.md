# Izba Przyjęć

## Jak wdrożyć

### Vercel
1. Zaloguj się i kliknij **New Project** > Import z GitHub.
2. Ustaw ENV vars w Settings:
   - NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY
   - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
   - NEXT_PUBLIC_FIREBASE_PROJECT_ID
3. Deploy.

### GitHub Pages
1. W `next.config.js` dodaj `output: 'export'`.
2. `npm install && npm run build && npm run export`.
3. Skopiuj `out/` do `gh-pages` lub `docs/`.
4. Włącz Pages w ustawieniach repo.
