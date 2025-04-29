import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderContainer } from "./styleHeader";
import { Cart } from "../cart/cart.jsx";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CoffeLogo from "../../assets/coffeeLogo.svg";
import { CartContext } from '../../contexts/CartContext';

const Header = () => {
  const history = useHistory();
  const { cart } = useContext(CartContext);

  const handleHome = () => {
    history.push('/');
  };

  return (
    <Navbar className="" expand="lg" >
      <HeaderContainer>
        <Nav className="navigateArea">
          <Nav.Link onClick={handleHome}>
            <img src={CoffeLogo} alt="Logo" className='CoffeLogo' />
          </Nav.Link>
          <Nav.Link  href="/">Home</Nav.Link>
          <Nav.Link  href="/products">Produtos</Nav.Link>
          <Nav.Link  href="/">Contato</Nav.Link>
        </Nav>
        <Cart cart={cart} />
      </HeaderContainer>
    </Navbar>
  );
};

export default Header;
