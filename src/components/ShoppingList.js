import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items: initialItems }) {

  const [items, setItems] = useState(initialItems);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const filteredItems = items.filter((item) => {
    const categoryCondition =
      selectedCategory === "All" || item.category === selectedCategory;
    const searchCondition = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryCondition && searchCondition;
  });

  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]); // Add the new item to the list
  };

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;