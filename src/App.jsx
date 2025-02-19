import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [selectedCat, setSelectedCat] = useState("");
  console.log(selectedCat);

  return (
    <>
      <Header selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
      <Main selectedCat={selectedCat} />
      <Footer />
    </>
  );
}

export default App;
