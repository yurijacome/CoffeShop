import React from "react";
import { ProductCardContainer } from "./productCardStyle";

export const ProductCard = ({ coffee }) => {
  if (!coffee) return null;
  return (
    <ProductCardContainer key={coffee.id}>
      <img src={coffee.image} alt={coffee.title} />
      <h2>{coffee.title}</h2>
      <p>{coffee.description}</p>
      {/* Preço fictício, pois a API não retorna preço */}
      <span>Preço: R$10,00</span>
      <button>Add to Cart</button>
    </ProductCardContainer>
  );
};