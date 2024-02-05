import React from 'react'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/products" replace} />
      <Route path='/products' />
      
    </Routes>
  )
}

export default App