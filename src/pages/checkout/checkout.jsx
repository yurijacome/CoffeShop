import React from "react";

import Header from "../../components/header/header";
import { CheckoutContainer } from "./checkoutStyle";

const Checkout = () => { 
    return (
        <div>
            <Header/>
            <CheckoutContainer>
                <h1>Finalizar Compra</h1>
                <p>Obrigado por comprar conosco!</p>
                <p>Seu pedido está sendo processado.</p>
            </CheckoutContainer>
        </div>
    );
    }

export default Checkout;