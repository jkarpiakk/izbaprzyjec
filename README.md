# Izba Przyjęć z panelem admina

## Domyślne konto administratora
- **Email:** admin@izbaprzyjec.eu
- **Hasło:** SecurePass123!

## Instalacja
1. `npm install`
2. Skonfiguruj `.env.local`:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
   NEXT_PUBLIC_FIREBASE_APP_ID=...
   ```
3. Wgraj `scripts/serviceAccountKey.json` z Firebase Console.

## Nadanie roli administratora
1. Dodaj użytkownika w Firebase Auth (admin@izbaprzyjec.eu / SecurePass123!).
2. Skopiuj UID z konsoli Firebase.
3. W `scripts/setAdmin.js` w polu `const uid = '<WPROWADŹ_UID_ADMINA>';` wklej ten UID.
4. Uruchom: `npm run set-admin`.

## Uruchomienie
- `npm run dev` – uruchamia serwer deweloperski.
- `npm run build && npm start` – produkcyjny build.
- `/admin` – panel moderacji historii, dostępny tylko dla admina.
