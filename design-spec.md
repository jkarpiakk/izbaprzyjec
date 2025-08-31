# Izba Przyjęć — Specyfikacja projektowa (kompakt)

Cel:
Zaprojektować bezpieczną, anonimową i przyjazną platformę dla zweryfikowanych pracowników ochrony zdrowia do dzielenia się zabawnymi i niecodziennymi historiami z pracy — z naciskiem na anonimowość, moderację i prostotę użycia.

Kluczowe wartości UX:
- Humorzaste, ale profesjonalne — lekki ton, bez wyśmiewania pacjentów.
- Anonimowość domyślna — widoczna rola + numer porządkowy (np. "pielęgniarka_2741").
- Minimalne dane wymagane, jasny proces weryfikacji.
- Intuicyjna moderacja i szybkie informacje zwrotne.
- Dostępność: poziom WCAG AA, czytelne kontrasty, focus states.

Główne strony:
- /login — logowanie (krótki opis: „Podziel się historią ze swojej izby przyjęć”)
- /register — rejestracja z wyborem zawodu i informacją o weryfikacji
- / — feed historii (filtrowanie, sortowanie)
- /submit — formularz dodania historii (checklista anonimizacji)
- /story/[id] — szczegóły historii + komentarze + reakcje
- /admin — panel admina: weryfikacja użytkowników, akceptacja historii, zgłoszenia
- /terms, /about — treści statyczne

Dostarczone artefakty:
- Paleta, typografia, siatka i komponenty.
- Responsywne prototypy HTML/CSS: login, register, feed (z min. 5 kart), story, submit, admin.
- Microcopy PL (wszystkie CTA, komunikaty błędów, puste stany).
- Regulamin (skrót + pełna treść).
- Lista kryteriów akceptacyjnych i checklisty projektowe.

Moderacja i weryfikacja:
- Nowe konto → status "oczekuje na weryfikację". Widoczne: komunikaty onboardingowe.
- Dodane historie trafiają do kolejki moderacji.
- Admin: weryfikacja kont (przycisk „Zweryfikuj”), akceptacja/odrzucenie historii, system zgłoszeń z akcjami.
- Zgłoszenia: powiadomienie dla moderatora; użytkownik zgłaszający otrzymuje komunikat "Dziękujemy, moderator sprawdzi".

Anonimizacja UI:
- W interfejsie wyświetlamy rolę + numer (np. "lek. Anonimowy" lub "lekarka_1032"). Nigdy e-mail/imię w publicznej treści.
- Formularz dodawania historii zawiera widoczny infobox i checkbox „Nie ujawniam danych pacjentów/placówki”.

Dostępność i responsywność:
- Kontrast: kolor tekstu #111827 na tle #F7F8FA (spełnia WCAG AA).
- Klikalne obszary min. 44×44 px.
- Focus visible dla przycisków i inputów.
- Mobile: single-column, hamburger menu.

Mikrodziałania przy interakcjach:
- Po rejestracji: ekran "Dzięki! Zweryfikujemy Twoje konto ASAP".
- Po wysłaniu historii: "Historia wysłana do moderacji".
- Po zgłoszeniu treści: "Dziękujemy, moderator sprawdzi".

Załączniki:
- style-guide.md (paleta i komponenty).
- components.html (CSS variables + przykłady komponentów).
- pages/*.html (prototypy stron).
- microcopy.md (wszystkie teksty).
- terms.md (regulamin skrót + full).
- acceptance-criteria.md (lista kontrolna jakości).

Instrukcja otwarcia prototypów:
1. Sklonuj repo lub skopiuj pliki lokalnie.
2. Otwórz plik pages/feed.html w przeglądarce — to centralny widok.
3. Wszystkie pliki są samodzielne (CSS in‑file) i responsywne.

Kontakt:
Jeśli chcesz, mogę:
- wygenerować SVG logo (warianty kolorystyczne i mono),
- przygotować pakiet Figma z komponentami i linkiem do prototypu klikalnego,
- przekształcić HTML w komponenty React z prostym store do symulacji weryfikacji.