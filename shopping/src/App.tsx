import React from 'react';

import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';

import { ProductsList } from './components/productsList/productsList';
import { store } from './components/redux/store';
import { Provider } from 'react-redux';

// componente estilizado

function App() {
  return (
    <Provider store={store}>
      <Header/>

      <ProductsList/>
      <GlobalStyles/>
    </ Provider>
  );
}

export default App;
