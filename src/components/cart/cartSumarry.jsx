import React from "react";
import { CartSummaryContainer } from "./cartSumarryStyle";

export const CartSummary = ({ cart, total }) => {
  return (
    <CartSummaryContainer>
    <h2 >Resumo do Carrinho</h2>
    <div className="cartSumarry">
        {cart && cart.length > 0 ? (
        <div className="cartItems">
            {cart.map(item => (
            <div key={item.id} className="cartItem">
                <div className="cartItemImage">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="cartItemDetails">
                    <h3>{item.title}</h3>
                    <p>Preço unitário: R${item.price?.toFixed(2) ?? '10,00'}</p>
                    <p>Total: R${((item.price || 10) * (item.quantity || 1)).toFixed(2)}</p>

                </div>
            </div>
            ))}
        <span>Total do pedido: R${total.toFixed(2)}</span>
        </div>
        ) : (
        <p>Seu carrinho está vazio.</p>
        )}
    </div>
  </CartSummaryContainer>
  );
}
