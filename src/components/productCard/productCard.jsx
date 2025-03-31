import React from "react";
import { ProductCardContainer } from "./productCardStyle";

export const ProductCard = () => {


    return (

        <ProductCardContainer >
            <img src="a" alt="alt" />
            <h2>name</h2>
            <p>description</p>
            <span>Preço:  R$10,00</span>
            <button>Add to Cart</button>
        </ProductCardContainer>

        // <div className="productCard">
        //     <img src={product.image} alt={product.name} />
        //     <h2>{product.name}</h2>
        //     <p>{product.description}</p>
        //     <p>Price: ${product.price}</p>
        //     <button>Add to Cart</button>
        // </div>
    );
}