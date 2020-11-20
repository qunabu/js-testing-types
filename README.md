# Testowanie.

## Teoria i przykłady w JavaScript.

> Pisanie testów to wykrywanie błędów przez programistów w trakcie pisania kodu źródłowego zamiast w najgorszym możliwym momencie - na produkcji przez klienta.

Mateusz Wojczal 2020

## Uruchomienie testów i reszta komend

- `yarn test` uruchamia `jest` w trybie watch
- `yarn test-cc` uruchamia `jest` w trybie watch który pokazuje `code covarage`
- `yarn test-ci` uruchamia `jest` przechodzi do testów i generuje plik `junit.xml`
- `yarn start` uruchamia środowisko deweloperskie
- `yarn codeclimate` uruchamia statyczną analizę kodu `codeclimate`
- `yarn lint` uruchamia statyczną analizę kodu `eslint`
- `yarn lint-fix` uruchamia statyczną analizę kodu `eslint` z opcją automatycznego naprawiania (napisuje pliki)
- `yarn slides` uruchamia prezentację
- `yarn cypress` uruchamia runner `cypress`

## Prezentacja

Źródła prezentacji są w katalogu [slides](slides).

`yarn slides` uruchamia prezentację.
