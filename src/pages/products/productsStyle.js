import styled from "styled-components";

export const ProductsContainer  = styled.div`
    display: flex;
    flex-direction: column;    
    width: 100%;
    height: 100vh;

    .productsArea {
        display: flex;
        flex-wrap: wrap;
        align-self: left;
        margin-left: 20px;
        overflow-y: auto;
        overflow-x: hidden;

        width: 65vw;
        background-color: rgb(255, 255, 255);
    }

`;
