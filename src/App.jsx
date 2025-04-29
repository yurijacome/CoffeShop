import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { GlobalStyle } from "./styles/GlobalStyle";
import { CartProvider } from './contexts/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </div>
  );
};

export default App;