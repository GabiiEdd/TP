import { useEffect, useState } from 'react';
import './App.css';
import { AddProducto } from './components/AddProducto';
import { Cart } from './components/Cart';

function App() {
  const [cart, setCart] = useState([
    {
      name: 'Pizza Muzzarella',
      description: '10 rodajas',
      price: 2500,
      quantity: 3,
    },
    {
      name: 'Coca Cola',
      description: '2 litros',
      price: 1000,
      quantity: 2,
    },
    {
      name: 'Helado',
      description: '1 kilo',
      price: 5000,
      quantity: 1,
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
