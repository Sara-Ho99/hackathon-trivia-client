import "./Main.scss";
import data from "../../../data.json";
import Card from "../Card/Card";

function Main({ selectedCat }) {
  const getRandomItems = (array, num, selectedCat) => {
    let filteredArray = [];
    if (selectedCat) {
      filteredArray = array.filter((item) => {
        if (item.category === selectedCat) {
          // console.log("selectedCat", selectedCat);
          // console.log("item.category", item.category);
          return true;
        }
      });
    } else {
      filteredArray = array;
    }
    const shuffled = [...filteredArray].sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, num); // Get the first `num` items
  };

  const randomData = getRandomItems(data, 9, selectedCat); // Select 9 random items

  return (
    <main className="main">
      {randomData.map((object, index) => (
        <Card key={index} object={object} index={index} />
      ))}
    </main>
  );
}

export default Main;
