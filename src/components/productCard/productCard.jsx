import React from "react";
import { ProductCardContainer } from "./productCardStyle";

export const ProductCard = ({ coffee, onAddToCart }) => {
  if (!coffee) return null;
  // Adiciona preço fictício se não existir
  const price = coffee.price || 10.0;
  return (
    <ProductCardContainer key={coffee.id}>
      <img src={coffee.image} alt={coffee.title} />
      <h2>{coffee.title}</h2>
      <p>{coffee.description}</p>
      <span>Preço: R${price.toFixed(2)}</span>
      <button onClick={() => onAddToCart({ ...coffee, price })}>Add to Cart</button>
    </ProductCardContainer>
  );
};