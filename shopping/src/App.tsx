import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header';

// componente estilizado

function App() {
  return (
    <>
      <Header/>
      <GlobalStyles/>
    </>
  );
}

export default App;
