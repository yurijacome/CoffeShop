import React, { useContext, useState } from "react";
import { CustomOffcanvas, CartContainer, CartCard, CustomButtonGroup } from "./cartStyle";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaTrash } from "react-icons/fa";
import { CartContext } from '../../contexts/CartContext';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);


  const removeItem = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, delta) => {
    setCart(prev => prev.map(item =>
      item.id === itemId
        ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
        : item
    ));
  };

  return (
    <CartContainer>
      <Nav>
        <PiShoppingCartSimpleBold
          className="cartIcon"
          onClick={() => setOpen(true)}
        />
        <CustomOffcanvas show={open} onHide={() => setOpen(false)} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {(!cart || cart.length === 0) ? (
              <p>O carrinho está vazio.</p>
            ) : (
              <div className="cartItems">
                {cart.map((item) => (
                  <CartCard key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div className="cartItemDetails">
                      <h2>{item.title}</h2>
                      <p>Preço unitário: R${item.price?.toFixed(2) ?? '10,00'}</p>
                      <span>Preço total: R${((item.price || 10) * (item.quantity || 1)).toFixed(2)}</span>
                    </div>
                    <div className="cartItemActions">
                      <CustomButtonGroup size="small" aria-label="quantidade do produto">
                        <Button onClick={() => updateQuantity(item.id, -1)} disabled={(item.quantity || 1) <= 1}>
                          <RemoveIcon fontSize="small" />
                        </Button>
                        <Button disabled>{item.quantity || 1}</Button>
                        <Button onClick={() => updateQuantity(item.id, 1)}>
                          <AddIcon fontSize="small" />
                        </Button>
                      </CustomButtonGroup>
                      <button onClick={() => removeItem(item.id)}>
                        <FaTrash size={20} color="#fff" />
                      </button>
                    </div>
                  </CartCard>
                ))}
              </div>
            )}
          </Offcanvas.Body>
        </CustomOffcanvas>
      </Nav>
    </CartContainer>
  );
};