import React, { useState, useEffect } from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  const [letsearch, setLetSearch] = useState(search || ""); 
  useEffect(() => {
    setLetSearch(search || "");
  }, [search]);

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={letsearch}
        onChange={(e) => {
          setLetSearch(e.target.value);
          onSearchChange(e.target.value);
        }}
      />
      <select name="filter" onChange={onCategoryChange}>
        {/* ... */}
      </select>
    </div>
  );
}

export default Filter;


