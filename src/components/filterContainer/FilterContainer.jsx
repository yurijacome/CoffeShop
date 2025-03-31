import React from "react";  

import { FilterContainerStyled } from "./filterStyle.jsx";

export const FilterContainer = () => {


  return (
    <FilterContainerStyled>
        <input type="text" placeholder="Filter by name" />

    </FilterContainerStyled>
  );
}