import React from 'react';
import ProductsContextProvider from './context/ProductsContext';
import Routes from './routes';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Routes />
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
