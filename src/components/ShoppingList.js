import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {

  const [inputData, setInputData] = useState({
    selectedCategory: "All",
    searchCategory: "", 
  })
  // const [selectedCategory, setSelectedCategory] = useState("All");
  // state of the input value defined
  // const [searchCategory, setSearchCategory] = useState("")

  const [search, setSearch] = useState("category")

  function filterBy (){
    
    const itemsToDisplay = items.filter((item) => {
      if (inputData.selectedCategory === "All") return true;
      
      return item.category === inputData.selectedCategory;
    });
    
    const searchItems = itemsToDisplay.filter((item) => {
      if (inputData.searchCategory === "") return true;

      return item.name === inputData.searchCategory;
    });

    console.log(searchItems)

    return search === "search" ? searchItems : itemsToDisplay;

  }
  // console.log(itemsToDisplay); becomes the filtered array
  // console.log(inputData.selectedCategory)
  // console.log(inputData.searchCategory); 
  const arrayItems = filterBy();
  console.log(arrayItems);
  // switch between itemToDisplay and searchItems based on the input value;

  return (
    <div className="ShoppingList">
      <ItemForm />

      <Filter 
        onCategoryChange={
          (e)=> setInputData({
            ...inputData, 
            selectedCategory: (e.target.value)
          })
        } 
        onSearchChange={
          (e)=> setInputData({
            ...inputData, 
            searchCategory: (e.target.value)
          })
        }/>

      <ul className="Items">
        {/* filtered array (itemsToDisplay) is itterated over */}
        {arrayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;