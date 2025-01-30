import "./Card.scss";
import { useState } from "react";

function Card({ object }) {
  const changeSymbols = (str) => {
    const temp = document.createElement("div");
    temp.innerHTML = str;
    return temp.textContent;
  };

  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <article
      className={`${flipped ? "card--flipped" : "card"}`}
      onClick={handleFlip}
    >
      <h3 className={`${flipped ? "card__hide" : "card__question"}`}>
        {changeSymbols(object.question)}
      </h3>
      <h2 className={`${flipped ? "card__answer" : "card__hide"}`}>
        {changeSymbols(object.correct_answer)}
      </h2>
      <p className={`${flipped ? "card__cat--flipped" : "card__cat"}`}>
        {changeSymbols(object.category)}
      </p>
    </article>
  );
}

export default Card;
