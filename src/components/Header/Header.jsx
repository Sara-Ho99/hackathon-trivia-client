import "./Header.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import cats from "../../../tags.json";

function Header({ selectedCat, setSelectedCat }) {
  //   const [cats, setCats] = useState([]);

  //   useEffect(() => {
  //     const fetchCats = async () => {
  //       try {
  //         const { data } = await axios.get(`${API_URL}/cats`);
  //         setCats(data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchCats();
  //   }, [API_URL]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    // console.log("Selected category:", selectedCategory);
    setSelectedCat(selectedCategory);
  };

  return (
    <header className="header">
      <h1 className="header__title">Trivia</h1>
      <div>
        <label className="header__label" htmlFor="category">
          category
        </label>
        <select className="header__select" onChange={handleCategoryChange}>
          <option value="">Select a category...</option>
          {cats.map((cat, index) => (
            <option key={index} value={cat} className="header__option">
              {cat}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}

export default Header;
