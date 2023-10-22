import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  function resetInput() {
    setInput('');
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(null);
  }

  function handleCalclate(calcFn, e) {
    e.preventDefault();
    setResult((result) =>
      result === null ? Number(input) : calcFn(result, Number(input)),
    );
    resetInput();
  }
  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p>{result ?? 'Please input your number'}</p>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          pattern="[0-9]"
          type="number"
          placeholder="Type a number"
        />
        <button onClick={(e) => handleCalclate((a, b) => a + b, e)}>add</button>
        <button onClick={(e) => handleCalclate((a, b) => a - b, e)}>
          subtract
        </button>
        <button onClick={(e) => handleCalclate((a, b) => a * b, e)}>
          multiply
        </button>
        <button
          onClick={(e) =>
            handleCalclate(
              (a, b) => (b === 0 ? 'ERROR: COULD DIVIDE ZERO' : a / b),
              e,
            )
          }
        >
          divide
        </button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
