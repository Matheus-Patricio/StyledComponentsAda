import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductsCards } from './components/products/ProductsCards';

// componente estilizado

function App() {
  return (
    <>
      <Header/>

      <ProductsCards/>
      <GlobalStyles/>
    </>
  );
}

export default App;
