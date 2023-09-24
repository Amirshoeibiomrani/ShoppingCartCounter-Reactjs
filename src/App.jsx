import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";

// Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';

// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider, {cartContext} from './context/CartContextProvider';

const App = () => {

  return (
   <ProductContextProvider>
    <CartContextProvider>
    <Switch>
      <Route path="/products/:id" component={ProductDetails} />
      <Route path="/products" component={Store} />
      <Redirect to="/products" />
    </Switch>
    </CartContextProvider>
   </ProductContextProvider>
  );
};

export default App;