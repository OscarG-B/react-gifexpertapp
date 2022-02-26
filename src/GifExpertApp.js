import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  //const categories = ["One Punch", "Samurai x", "Dragon Ball"];

  const [categories, setCategories] = useState(["kimetsu"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAdd}>Agragr</button> */}
      <ol>
        {/* <li>One Punch</li>
        <li>Samurai x</li>
        <li>Dragon Ball</li> */}
        {categories.map((category, i) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
