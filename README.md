# Izba Przyjęć

## Instalacja
1. Rozpakuj archiwum.
2. W katalogu projektu stwórz plik `.env.local` z danymi Firebase:
```
NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
```
3. Zainstaluj zależności:
```
npm install
```
4. Uruchom w trybie deweloperskim:
```
npm run dev
```
## Struktura
- `pages/` – strony Next.js
- `components/` – komponenty React
- `public/` – statyczne grafiki (logo, awatary)
- `firebaseConfig.js` – konfiguracja Firebase
- `contexts/` – kontekst uwierzytelnienia
