import React, { useMemo, useState } from "react";
import "./App.css";
import { div, mod } from "./services/div";

function App() {
  const [state, setState] = useState([1, 1]);
  const result = useMemo(() => {
    return state[1] === 0 /* || isNaN(state[0] / state[1]) */
      ? {
          div: "🤬",
          mod: "🤬",
        }
      : {
          div: div(state[0] / state[1]).toString(),
          mod: mod(state[0] / state[1]).toString(),
        };
  }, [state]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dummy divider</h1>
        <form>
          <label>
            <span>Dzielna </span>
            <input
              data-testid="dzielna"
              type="number"
              step="1"
              value={state[0]}
              onChange={(e) => setState([parseInt(e.target.value), state[1]])}
            />
          </label>
          <br />
          <label>
            <span>Dzielnik </span>
            <input
              data-testid="dzielnik"
              type="number"
              step="1"
              value={state[1]}
              onChange={(e) => setState([state[0], parseInt(e.target.value)])}
            />
          </label>
          <hr />
          Wynik: <span data-testid="result">{result.div}</span>, Reszta:{" "}
          <span data-testid="modulo">{result.mod}</span>
        </form>
      </header>
    </div>
  );
}

export default App;
