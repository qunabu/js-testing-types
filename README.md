# Testowanie JavaScript

[![Acceptance Tests](https://github.com/qunabu/js-testing-types/actions/workflows/codeconcept.yml/badge.svg)](https://github.com/qunabu/js-testing-types/actions/workflows/codeconcept.yml)
[![End-to-end tests](https://github.com/qunabu/js-testing-types/actions/workflows/e2e.yml/badge.svg)](https://github.com/qunabu/js-testing-types/actions/workflows/e2e.yml)
[![Static Code Analysis](https://github.com/qunabu/js-testing-types/actions/workflows/static.yml/badge.svg)](https://github.com/qunabu/js-testing-types/actions/workflows/static.yml)
[![Unit & Integration Tests](https://github.com/qunabu/js-testing-types/actions/workflows/unit-integration.yml/badge.svg)](https://github.com/qunabu/js-testing-types/actions/workflows/unit-integration.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/375171535f08cc683bfd/maintainability)](https://codeclimate.com/github/qunabu/js-testing-types/maintainability)

Poniższe repozytorium służy do pokazania różnych strategii testowania automatycznego w języku JavaScript.

Kod w tym repozytorium jest oparty o `React` i domyślne ustawienia `create-react-app`, oprócz tego zawiera:

- Prostą aplikację do której podłączone są testy.
- Runner do testów `Jest`. Testy jednostkowe i integracyjne w plikach `**/*.test.js`
- Framework do testowania komponentów Reacta [react-testing-library](https://github.com/testing-library/react-testing-library)
- Runner do testów e2e [cypress](https://www.cypress.io/). Definicje testów w katalogu [cypress](cypress)
- [Pre hook git-push](https://github.com/typicode/husky) uruchamiający testy w momecie `git push`. Kod który nie przechodzi testów `Jest` nie będzie wysłany do repozytorium.
- Skonfigurowany Continous Integration oparty o CircleCi [![qunabu](https://circleci.com/gh/qunabu/js-testing-types.svg?style=shield)](https://circleci.com/gh/qunabu/js-testing-types)

## Teoria i przykłady w JavaScript.

> Pisanie testów to wykrywanie błędów przez programistów w trakcie pisania kodu źródłowego zamiast w najgorszym możliwym momencie - na produkcji przez klienta.

Mateusz Wojczal 2020

## Prezentacja

Źródła prezentacji są w katalogu [slides](slides).

`yarn slides` uruchamia prezentację.

Prezentacja dostępna jest na [YouTube](https://www.youtube.com/watch?v=U5kcUhzskjY)

Prezentacja napisana jest w markdown a wyświetlana przy pomocy [evealjs](https://revealjs.com/).

## Uruchomienie testów i reszta [komend](package.json)

- `yarn test` uruchamia `Jest` w trybie watch
- `yarn test-cc` uruchamia `Jest` w trybie watch który pokazuje `code covarage`
- `yarn test-ci` uruchamia `Jest` następnie przechodzi do testów i generuje plik raport do pliku `junit.xml`
- `yarn start` uruchamia środowisko deweloperskie `React`
- `yarn codeclimate` uruchamia statyczną analizę kodu `codeclimate`
- `yarn lint` uruchamia statyczną analizę kodu `eslint`
- `yarn lint-fix` uruchamia statyczną analizę kodu `eslint` z opcją automatycznego naprawiania (nadpisuje pliki)
- `yarn slides` uruchamia prezentację
- `yarn cypress` uruchamia runner `cypress` w nowym oknie
- `yarn cypress-run` uruchamia runner `cypress` z opcją automatycznego uruchamiania testów
- `yarn cypress-test` uruchamia runner `cypress` w tle i wyświetla raport. nagrywa sesję video

## Todo

- testy akceptacyjne codecept

## Live Coding

Testowanie w JS. Jest, React testing lib, Cypress
Live coding bedzie dotyczył testowania prostej aplikacji napisanej w Reacie z create-react-app

- testów jednostkowych - jest
- testów strukturalnych i ich konfiguracji, z użyciem narzędzi code climate i eslint
- testów integracyjnych/funkcjonalnych -jest i react-testing-library
- testów end-to-end e2d - cypress.js
- testów akceptacyjnych codecept
- konfiguracji jest do Test Driven Development, raportów Code Covarage
- konfiguracji Continous Integration na podstawie CircleCi, jest i cypress
- ustawienia pre-hookow z uzyciem husky aby nie pchać niepoprawnego kodu
