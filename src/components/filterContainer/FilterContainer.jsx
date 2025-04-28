import React from "react";  

import { FilterContainerStyled } from "./filterStyle.jsx";
import { FaSearch } from "react-icons/fa"; // Import the search icon from react-icons

export const FilterContainer = ({ filter, setFilter }) => {
  return (
    <FilterContainerStyled>
        <input 
          type="text" 
          placeholder="Filter by name" 
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <FaSearch className='SearchIcon' />
    </FilterContainerStyled>
  );
}