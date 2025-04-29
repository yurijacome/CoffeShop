import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/home/home';
import Products from '../pages/products/products';
import Checkout from '../pages/checkout/checkout';



const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/checkout" component={Checkout} />
        {/* Adicione outras rotas conforme necessário */}
      </Switch>
    </Router>
  );
};

export default AppRoutes;
