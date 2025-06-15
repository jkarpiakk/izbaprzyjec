# Izba Przyjęć (Next.js + Firebase)

## Konfiguracja

1. Utwórz plik `.env.local` z:
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy… 
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=izbaprzyjec-9266b.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=izbaprzyjec-9266b
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=izbaprzyjec-9266b.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
```

2. Wgraj w `scripts/serviceAccountKey.json` swój klucz serwisowy Firebase.

3. Dodaj konto admin (`admin@izbaprzyjec.eu`, hasło `SecurePass123!`) w Firebase Auth.

4. Uzyskaj UID i wklej w `scripts/setAdmin.js` w miejsce `<ADMIN_UID>`, następnie:
```
npm install
npm run set-admin
```

5. Uruchom:
```
npm run dev
```

## Deploy

- Wrzuć na GitHub, skonfiguruj zmienne w Vercel.
- Deployuj normalnie – powinno działać.

