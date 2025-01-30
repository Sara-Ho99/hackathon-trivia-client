import "./Card.scss";

function Card({ object, index }) {
  return (
    <article className="card">
      <h2 className="card__question">{object.question}</h2>
      <div>
        <p className="card__answer">{object.correct_answer}</p>
        <p className="card__cat">{object.category}</p>
      </div>
    </article>
  );
}

export default Card;
