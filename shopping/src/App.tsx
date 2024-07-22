import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductsCards } from './components/products/ProductsCards';
import { ProductsList } from './components/productsList/productsList';

// componente estilizado

function App() {
  return (
    <>
      <Header/>

      <ProductsList/>
      <GlobalStyles/>
    </>
  );
}

export default App;
