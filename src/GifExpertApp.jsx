import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  const onAddCategory = (newCategory) => {
    if (
      categories.some(
        (show) => show.toLowerCase() === newCategory.toLowerCase()
      )
    )
      return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory
        //    setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* List Gif */}
      {/* <button onClick={onAddCategory}>Add</button> */}

      {categories.map((category) => {
        return (
          <>
            <GifGrid key={category} category={category} />
          </>
        );
      })}

      {/* Gif Item */}
    </>
  );
};
