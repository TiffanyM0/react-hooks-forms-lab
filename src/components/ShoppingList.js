import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {

  const [inputData, setInputData] = useState({
    selectedCategory: "All",
    searchCategory: "All", 
  })
  // const [selectedCategory, setSelectedCategory] = useState("All");

  // state of the input value defined
  // const [searchCategory, setSearchCategory] = useState("")

  
  const itemsToDisplay = items.filter((item) => {
    if (inputData.selectedCategory === "All") return true;
    
    return item.category === inputData.selectedCategory;
  });
  // console.log(itemsToDisplay); becomes the filtered array
  console.log(inputData.selectedCategory)

  const searchItems = items.filter((item)=> {
    if (inputData.searchCategory === "") return true;
    return item.name === inputData.searchCategory;
  })

  console.log(inputData.searchCategory); 
  
  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
        onCategoryChange={(e)=> setInputData({...inputData, selectedCategory: (e.target.value)})} 
        onSearchChange={(e)=> setInputData({...inputData, searchCategory: (e.target.value)})} />
      <ul className="Items">
        {/* filtered array (itemsToDisplay) is itterated over */}
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;