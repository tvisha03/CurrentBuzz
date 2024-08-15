import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import { useState } from "react";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  );
};

export default App;
