import { useState } from "react";
import { FaBars } from "react-icons/fa";

import alpha from "./alphabet.json";
import Answer from "./Answer";

import "./App.scss";
import "@fontsource/open-sans";

const shuffle = (arr) =>
  arr
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

const pickN = (arr, n) => shuffle(arr).slice(0, n);
const generateChoices = (num) => pickN(Object.keys(alpha.alphabet), num);

function App() {
  const [counter, setCounter] = useState(0);
  const [best, setBest] = useState(0);
  const [choices, setChoices] = useState(generateChoices(3));

  const onClick = (value) => {
    if (value === choices[0]) {
      setCounter(counter + 1);
      setChoices(generateChoices(3));
      if (counter + 1 > best) {
        setBest(counter + 1);
      }
    } else {
      setCounter(0);
    }
  };

  return (
    <div className="App">
      <div className="top-bar"></div>
      <div className="round-block menu">
        <FaBars />
      </div>
      <div className="right-wrapper menu-wrapper">
        <div className="counter-wrapper">
          <div className="name">Current steak</div>
          <div className="counter">{counter}</div>
        </div>
        <div className="counter-wrapper">
          <div className="name">Best steak</div>
          <div className="counter">{best}</div>
        </div>
      </div>
      <div className="center-wrapper">
        <div className="circus">
          <div className="card spinner"></div>
          <div className="card">
            <div className="letter">{choices[0]}</div>
          </div>
        </div>
      </div>
      <div className="center-wrapper">
        <span className="info">Select the character</span>
      </div>
      <div className="center-wrapper">
        {shuffle(choices).map((l) => (
          <Answer
            letter={l}
            key={l}
            correct={l === choices[0]}
            pronounciation={alpha.alphabet[l].pronounciation}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
