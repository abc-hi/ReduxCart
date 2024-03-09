import React from 'react';
import { Provider } from 'react-redux';
import { store } from './CartStore';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1 style={{ fontFamily: 'Harrington', color:'black',border:'1px solid black',textAlign:'center',  backgroundColor:"red"}}>Welcome to Reva's Shopping Cart</h1>
        <Cart />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
