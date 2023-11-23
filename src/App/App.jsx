import { useEffect, useState } from 'react';
import './App.css';
import { AddProducto } from './components/AddProducto';
import { Cart } from './components/Cart';

function App() {
  const [cart, setCart] = useState([
    {
      name: 'Banana',
      description: 'Bananas por kg',
      price: 545,
      quantity: 3,
    },
  ]);

  useEffect(() => {
    let cart_b = localStorage.getItem('Cart');
    if (cart_b) {
      setCart(JSON.parse(cart_b));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <header className="header">
        <h1>.</h1>
      </header>
      <main className="flex">
        <AddProducto cart={cart} setCart={setCart} />
        <Cart cart={cart} setCart={setCart} />
      </main>
      <div className="footer">@Gabriel Acosta</div>
    </>
  );
}

export default App;
