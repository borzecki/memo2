import { useState } from "react";

function Answer({ letter, correct, pronounciation, onClick }) {
  const [state, setState] = useState("ok");
  const delayedOnClick = () => {
    setState(correct);
    setTimeout(() => {
      onClick(letter);
      setState("ok");
    }, 1000);
  };
  return (
    <div className={"round-block " + state} onClick={delayedOnClick}>
      {pronounciation}
    </div>
  );
}

export default Answer;
