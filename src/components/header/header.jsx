import React from 'react';
import { useState } from "react"; // Import useContext for theme management
import { useHistory } from 'react-router-dom';

import { HeaderContainer } from "./styleHeader";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CoffeLogo from "../../assets/coffeeLogo.svg";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";


import { FilterContainer } from "../filterContainer/FilterContainer";
import {Cart} from "../cart/cart";



const Header = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleHome = () => {
    history.push('/');
  };


  return (
    <Navbar class="" expand="lg" >
      <HeaderContainer>
        <Nav className="navigateArea">
          <Nav.Link onClick={handleHome}>
            <img src={CoffeLogo} alt="Logo" className='CoffeLogo' />
          </Nav.Link>
          <Nav.Link  href="/">Home</Nav.Link>
          <Nav.Link  href="/products">Produtos</Nav.Link>
          <Nav.Link  href="/">Contato</Nav.Link>
        </Nav>

        <Nav className="searchArea">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <FaSearch className='SearchIcon'></FaSearch>
          </Form>
        </Nav>
        
        <Nav className="cartArea">
            <PiShoppingCartSimpleBold
              className="cartIcon"
              onClick={() => setOpen(true)}
            />
            <Offcanvas show={open} onHide={() => setOpen(false)} placement="end">
              <Offcanvas.Header closeButton>
              <Offcanvas.Title >Cart</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              </Offcanvas.Body>
            </Offcanvas>
          </Nav>
      </HeaderContainer>
    </Navbar>
    
  );

};

export default Header;
