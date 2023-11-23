import { SumaTotal } from './SumaTotal';
import './Cart.css';
export const Cart = ({ cart, setCart }) => {
  const handleIncreaseQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const handleDecreaseQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCart(newCart);
    }
  };

  const handleDeleteItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <>
      <div className="cart-container">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-description">{item.description}</p>
              <p className="item-quantity">Cantidad: {item.quantity}</p>
              <p className="item-price">Precio unitario: ${item.price}</p>
              <p className="item-subtotal">
                Subtotal: ${item.price * item.quantity}
              </p>
            </div>
            <div className="item-actions">
              <button
                onClick={() => handleDecreaseQuantity(index)}
                className="quantity-button"
              >
                -
              </button>
              <button
                onClick={() => handleIncreaseQuantity(index)}
                className="quantity-button"
              >
                +
              </button>
              <button
                onClick={() => handleDeleteItem(index)}
                className="delete-button"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <SumaTotal cart={cart} />
    </>
  );
};
