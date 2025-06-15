# Izba Przyjęć

## Wdrożenie na Vercel
1. Importuj repo na Vercel.
2. Dodaj zmienne środowiskowe (NEXT_PUBLIC_FIREBASE...).
3. Deploy – gotowe!

## Wdrożenie na GitHub Pages
1. `next.config.js` -> `output: 'export'`.
2. `npm install && npm run build && npm run export`.
3. Skopiuj `out/` do `gh-pages` lub `docs`.
4. Włącz Pages w ustawieniach.
