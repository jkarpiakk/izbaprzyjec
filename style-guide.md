# Izba Przyjęć — Style guide (palette, typography, tokens)

Kolory:
- Primary (chirurgiczna zieleń): #2E8B57
- Accent (lekarski niebieski): #1E88E5
- Background (neutral): #F7F8FA
- Surface / Cards: #FFFFFF
- Text primary: #111827
- Muted text: #6B7280
- Success (akcje pozytywne): #16A34A
- Danger (usuwanie/zgłoszenia): #E53935
- Shadow: rgba(17,24,39,0.06)

Przykładowe użycie:
- Primary: przycisk "Dodaj historię", akcenty nagłówków.
- Accent: linki, tagi, hover stany ikon.
- Neutral background: całe tło strony.
- Surface: karty historii i modale.

Typografia:
- Główna: Inter (system fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial)
- Weights: 400 (regular), 600 (semi-bold), 700 (bold)
- Rozmiary:
  - H1: 28px / 36px (desktop)
  - H2: 20px / 28px
  - Body: 16px / 20px
  - Small: 14px

Siatka i spacing:
- Grid container max-width: 1100px (desktop)
- Side gutters: 16px (mobile), 32px (desktop)
- Spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48
- Border radius: 12px (cards), 8px (buttons), 9999px (avatars)
- Focus outline: 3px solid rgba(30,136,229,0.18) + box-shadow

Komponenty (krótko):
- Button primary: background #2E8B57, color #fff, radius 8px, padding 10px 16px.
- Button ghost: border 1px solid #D1D5DB, background transparent.
- Card: bg #fff, radius 12px, padding 16px, shadow rgba(17,24,39,0.06).
- Badge/tag: small pill, bg #EEF2F7, text #1E88E5 (dla tagów specjalizacji użyć akcentu).
- Avatar: okrągły 48px, płaski ilustrowany styl, różne warianty per rola.

Reakcje:
- Każda reakcja ma emoji i licznik. Ikona aktywnego stanu: wypełnione tło #E6F4EA (dla pozytywnych) lub #E3F2FD (dla informacyjnych).

Dostępność:
- Kolor tekstu musi spełniać kontrast >= 4.5:1 dla tekstu normalnego.
- Wszystkie interaktywne elementy mają focus state i aria-label.
- Minimum target hit: 44×44 px.

Ikony i ilustracje:
- Styl płaski, ograniczona paleta akcentów.
- Avatary reprezentacyjne (lekarka, lekarz, pielęgniarka, ratownik) — różne fryzury/kolory opasek; spójność stylu.

Animacje:
- Delikatne (150ms ease) na hover dla przycisków i kart.
- Brak rozpraszających przejść.

Pliki źródłowe:
- Wersje SVG logo: full color, monochrome, favicon.
- Zestaw avatarów: 6 wariantów × 3 role (lekarka/lek, pielęgniarka, ratownik).