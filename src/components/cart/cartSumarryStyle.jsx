import styled from "styled-components";

export const CartSummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 400px;
    background-color: rgb(224, 0, 0);
    color: #fff;

    .cartSumarry{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .cartItems{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }

    .cartItem{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        margin-bottom: 10px;
        background-color: rgb(51, 51, 51);
    }

    .cartItemImage{
        width: 100px;
        height: 100px;
        margin-right: 10px;
    }
    .cartItemImage img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .cartItemDetails{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }


`