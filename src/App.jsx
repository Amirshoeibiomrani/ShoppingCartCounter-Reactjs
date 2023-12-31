import "./App.css";

import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";

// Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';


const App = () => {

  return (
   <ProductContextProvider>
    <CartContextProvider>
      <Navbar />
    <Switch>
      <Route path="/products/:id" component={ProductDetails} />
      <Route path="/products" component={Store} />
      <Route path="/cart" component={ShopCart} />
      <Redirect to="/products" />
    </Switch>
    </CartContextProvider>
   </ProductContextProvider>
  );
};

export default App;