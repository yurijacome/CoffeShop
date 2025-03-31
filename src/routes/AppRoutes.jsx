import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/home/home';
import Products from '../pages/products/products';



const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
