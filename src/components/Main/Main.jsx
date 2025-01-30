import "./Main.scss";
import data from "../../../../data.json";
import Card from "../Card/Card";

function Main() {
  const getRandomItems = (array, num) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, num); // Get the first `num` items
  };

  const randomData = getRandomItems(data, 9); // Select 9 random items

  return (
    <main className="main">
      {randomData.map((object, index) => (
        <Card key={index} object={object} index={index} />
      ))}
    </main>
  );
}

export default Main;
