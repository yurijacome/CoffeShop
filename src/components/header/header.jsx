import React from 'react';
import { useState } from "react"; // Import useContext for theme management

import { useHistory } from 'react-router-dom';
import { HeaderContainer } from "./styleHeader";

import CoffeLogo from "../../assets/coffeeLogo.svg";

import { FilterContainer } from "../filterContainer/FilterContainer";
import {Cart} from "../cart/cart";

import { PiShoppingCartSimpleBold } from "react-icons/pi";


const Header = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleHome = () => {
    history.push('/');
  };




  return (

    <HeaderContainer className="header-container">

      <div className="navigateArea">
        <img src={CoffeLogo} className="CoffeLogo" onClick={handleHome} alt='Logo'/>
        <div className="linksArea">
          <a href='/'>Inicio</a>
          <a href='/products'>Produtos</a> 
          <a href='/'>Contato</a>  
        </div>
      </div>

      <div className="searchArea">
      <FilterContainer />
      <PiShoppingCartSimpleBold className="cartIcon" onClick={() =>setOpen(!open)} />
      {open && ( <Cart />)}
      </div>



    </HeaderContainer>

  );

};

export default Header;
