# Testowanie.

Poniższe repozytorium służy do pokazania różnych strategii testowania automatycznego w języku JavaScript.

Kod w tym repozytorium jest oparty o `React` i domyślne ustawienia `create-react-app`, oprócz tego zawiera

- Prostą aplikację do której podłączone są testy.
- Runner to testów `Jest`. Testy jednostkowe i integracyjne w plikach `**/*.test.js`
- Framework do testowania komponentów Reacta [react-testing-library](https://github.com/testing-library/react-testing-library)
- Runner do testów e2e [cypress](https://www.cypress.io/). Definicje testów w katalogu [cypress](cypress)
- [Pre hook git-push](https://github.com/typicode/husky) uruchamiający testy w momecie `push`. Kod który nie przechodzi testów `Jest` nie będzie wysłany
- Skonfigurowany Continous Integration oparty o CircleCi [![qunabu](https://circleci.com/gh/qunabu/js-testing-types.svg?style=shield)](https://circleci.com/gh/qunabu/js-testing-types)

## Teoria i przykłady w JavaScript.

> Pisanie testów to wykrywanie błędów przez programistów w trakcie pisania kodu źródłowego zamiast w najgorszym możliwym momencie - na produkcji przez klienta.

Mateusz Wojczal 2020

## Prezentacja

Źródła prezentacji są w katalogu [slides](slides).

`yarn slides` uruchamia prezentację.

Prezentacja dostępna jest na [YouTube](https://www.youtube.com/watch?v=U5kcUhzskjY)

## Uruchomienie testów i reszta [komend](package.json)

- `yarn test` uruchamia `jest` w trybie watch
- `yarn test-cc` uruchamia `jest` w trybie watch który pokazuje `code covarage`
- `yarn test-ci` uruchamia `jest` przechodzi do testów i generuje plik `junit.xml`
- `yarn start` uruchamia środowisko deweloperskie
- `yarn codeclimate` uruchamia statyczną analizę kodu `codeclimate`
- `yarn lint` uruchamia statyczną analizę kodu `eslint`
- `yarn lint-fix` uruchamia statyczną analizę kodu `eslint` z opcją automatycznego naprawiania (napisuje pliki)
- `yarn slides` uruchamia prezentację
- `yarn cypress` uruchamia runner `cypress` w nowym oknie
- `yarn cypress-run` uruchamia runner `cypress` z opcją automatycznego uruchamiania testów
- `yarn cypress-test` uruchamia runner `cypress` w tle i wyświetla raport. nagrywa sesję video
