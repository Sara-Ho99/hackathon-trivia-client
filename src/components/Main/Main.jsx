import "./Main.scss";
import Card from "../Card/Card";
import data from "../../../data.json";
import { useState, useEffect } from "react";
import axios from "axios";

function Main({ selectedCat }) {

  const API_URL = import.meta.env.VITE_API_URL;
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/data`);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [API_URL]);
  
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
        <Card key={index} object={object} />
      ))}
    </main>
  );
}

export default Main;
