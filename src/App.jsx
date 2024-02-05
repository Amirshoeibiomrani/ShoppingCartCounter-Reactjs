import React from 'react'
import {Routes,Navigate, Route} from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import DetailsPage from './pages/DetailsPage';
import PageNotFound from './pages/404';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/products" replace />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/products/:id' element={<DetailsPage />} />
      <Route path='/checkout' element={<CheckoutPage />} />
      
    </Routes>
  )
}

export default App