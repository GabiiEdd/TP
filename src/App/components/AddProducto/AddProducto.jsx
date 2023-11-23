import { useState } from 'react';
import './AddProducto.css'

export const AddProducto = ({ cart, setCart }) => {
  const [NuevoProducto, setNuevoProducto] = useState({
    NombreProducto: '',
    DescripcionProducto: '',
    PrecioProducto: '',
  });

  function onInputChange(e) {
    const { name, value } = e.target;
    setNuevoProducto({
      ...NuevoProducto,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newProduct = {
      name: NuevoProducto.NombreProducto,
      description: NuevoProducto.DescripcionProducto,
      price: parseFloat(NuevoProducto.PrecioProducto),
      quantity: 1,
    };

    if (!newProduct.name || !newProduct.price) {
      alert('Rellenar los campos');
      return;
    }

    setCart([...cart, newProduct]);
    setNuevoProducto({
      NombreProducto: '',
      DescripcionProducto: '',
      PrecioProducto: '',
    });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form">
      <h1 className="title">Cargar producto</h1>

      <div className="group">
        <label htmlFor="NombreProducto" className="label">
          Nombre del producto
        </label>
        <input
          type="text"
          id="NombreProducto"
          name="NombreProducto"
          value={NuevoProducto.NombreProducto}
          onChange={(e) => onInputChange(e)}
          className="input"
        />
      </div>

      <div className="group">
        <label htmlFor="DescripcionProducto" className="label">
          Descripción (Opcional)
        </label>
        <input
          type="text"
          id="DescripcionProducto"
          name="DescripcionProducto"
          value={NuevoProducto.DescripcionProducto}
          onChange={(e) => onInputChange(e)}
          className="input"
        />
      </div>

      <div className="group">
        <label htmlFor="PrecioProducto" className="label">
          Precio
        </label>
        <input
          type="number"
          id="PrecioProducto"
          name="PrecioProducto"
          value={NuevoProducto.PrecioProducto}
          onChange={(e) => onInputChange(e)}
          className="input"
        />
      </div>

      <button className="button">Añadir al carrito</button>
    </form>
  );
};
