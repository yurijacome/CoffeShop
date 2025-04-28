import React, { useState, useEffect } from 'react';

import Header from '../../components/header/header.jsx';

import { ProductsPage } from "./productsStyle.js";
import { ProductCard } from "../../components/productCard/productCard.jsx";
import { FilterContainer } from "../../components/filterContainer/FilterContainer.jsx";
import { getHotCoffees, getIcedCoffees } from '../../services/coffeeService';

const Products = () => {
  const [filter, setFilter] = useState("");
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    async function fetchCoffees() {
      const hotCoffees = await getHotCoffees();
      const icedCoffees = await getIcedCoffees();
      setCoffees([...hotCoffees, ...icedCoffees]);
    }
    fetchCoffees();
  }, []);

  const filteredCoffees = coffees.filter(coffee =>
    coffee.title && coffee.title.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    
    <div>
      
      <Header/>
      <ProductsPage>
        <div className="productsArea">
          {filteredCoffees.map((coffee) => (
            <ProductCard key={`${coffee.id}-${coffee.title}`} coffee={coffee} />
          ))}
        </div>
        <div className="seachArea">
          <FilterContainer filter={filter} setFilter={setFilter}/>
        </div>
      </ProductsPage>
    </div>

  );
};

export default Products;

