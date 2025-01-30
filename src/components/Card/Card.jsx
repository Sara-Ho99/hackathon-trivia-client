import "./Card.scss";

function Card({ object, index }) {
    const changeSymbols = (str) => {
        const temp = document.createElement("div");
        temp.innerHTML = str;
        return temp.textContent;
      };

  return (
    <article className="card">
      <h2 className="card__question">{changeSymbols(object.question)}</h2>
      <div>
        <p className="card__answer">{object.correct_answer}</p>
        <p className="card__cat">{object.category}</p>
      </div>
    </article>
  );
}

export default Card;
