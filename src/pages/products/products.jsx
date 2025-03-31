import React from 'react';

import Header from '../../components/header/header.jsx';

import { ProductsContainer } from "./productsStyle.js";
import { ProductCard } from "../../components/productCard/productCard.jsx";


 const Products = () => {


  return (

    <div>
      <Header  />
      <ProductsContainer>

        <div className="productsArea">          
        <ProductCard/>
        <ProductCard/>

        <ProductCard/>
        <ProductCard/>

        </div>

      </ProductsContainer>
    </div>

  );

};

export default Products;

