import { FaShoppingCart } from 'react-icons/fa';
import './Cart.css';
export const SumaTotal = ({ cart }) => {
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="SumaTotal-container">
      <div className="SumaTotal-item">
        <FaShoppingCart className="cart-icon" />
        <h2>Tienda de productos</h2>
      </div>
      <p className="SumaTotal-text">Cantidad de Artículos: {totalQuantity}</p>
      <p className="SumaTotal-text">Precio Total: ${totalPrice}</p>
    </div>
  );
};
