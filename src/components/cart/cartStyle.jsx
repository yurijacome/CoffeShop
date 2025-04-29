import styled from "styled-components";
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonGroup from '@mui/material/ButtonGroup';



export const CartContainer = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: relative;
    
    margin-left: auto;
    
    .cartIcon {
        font-size: 2rem;
        color: rgb(255, 255, 255); 
    }



    
`

export const CartCard = styled.div`
    border: none;
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 50px ;

    img {
        width: 100px;
        height: 80px;
        border-radius: 5px;

    }

    .cartItemDetails {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        width: 50%;
        color: #fff;
    }
    h2 {
        font-size: 1.0rem;
        font-weight: 800;
        color: #fff;
        margin-bottom: 22px;
    }
    p {
        font-size: 0.7rem;
        color: #fff;
        margin: 0;
    }
    
    span {
        font-size: 0.8rem;
        font-weight: 800;
        color: #fff;
    }

    .cartItemActions {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-left: auto;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 30px;
        color: #fff;
    }
    button:hover {
        opacity: 0.7;
    }
`;

export const CustomOffcanvas = styled(Offcanvas)`
    &.offcanvas {
        background-color: rgb(20, 20, 20);
        color: #fff;
        width: 550px;
    }
    .offcanvas-header {
        background-color: rgb(83, 83, 83);
        color: #fff;
    }
    .offcanvas-title {
        color: #fff;
    }
    .offcanvas-body {
        background-color: rgb(27, 27, 27);
        color: #fff;
    }

    
    .cartItems{
    overflow-y: auto;
    height: 500px;
    }

    .cartSummary {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        width: 100%;

        border-top: 1px solid #fff2;

    }

`;

export const CustomButtonGroup = styled(ButtonGroup)`
  &.MuiButtonGroup-root {
    background: transparent;
    border-radius: 6px;
    border: 1px solid #fff;
    box-shadow: none;
    .MuiButtonBase-root {
      color: #fff;
      border: none;
      background: transparent;
      min-width: 32px;
      font-weight: bold;
      font-size: 1rem;
      &:disabled {
        color: #fff8;
      }
    }
    .MuiButtonBase-root:not(:last-child) {
      border-right: 1px solid #fff2;
    }
  }
`;