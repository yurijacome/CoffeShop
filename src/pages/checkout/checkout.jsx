import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import Header from "../../components/header/header";
import { CheckoutContainer } from "./checkoutStyle";
import { CartSummary } from "../../components/cart/cartSumarry";

const Checkout = () => { 
    const { cart } = useContext(CartContext);
    const total = cart?.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0) || 0;
    return (
        <div>
            <Header/>
            <CheckoutContainer>
                <h1>Finalizar Compra</h1>
                <CartSummary cart={cart} total={total} />
                <p>Obrigado por comprar conosco!</p>
                <p>Seu pedido está sendo processado.</p>
            </CheckoutContainer>
        </div>
    );
}

export default Checkout;