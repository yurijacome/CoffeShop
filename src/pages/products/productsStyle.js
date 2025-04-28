import styled from "styled-components";

export const ProductsPage  = styled.div`

    display: flex;
    flex-direction: row;
    

  

    .productsArea {
        display: flex;
        flex-wrap: wrap;
        align-self: left;
        margin-left: 20px;
        overflow-y: auto;
        overflow-x: hidden;

        width: 65vw;
    }

    .seachArea {
        display: flex;
        flex-direction: column;
        align-self: right;
        margin-right: 20px;
        overflow-y: auto;
        overflow-x: hidden;

        width: 30vw;
    }

`;
