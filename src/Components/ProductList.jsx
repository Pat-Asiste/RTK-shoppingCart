// Componente 1
import React from 'react';
import './ProductList.css';
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "./CartSlice.jsx";

const ProductList = () => {

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const handleAddToCart = (product) => (dispatch(addItemToCart(product)));       /*-----------------------------   ~~OPCIONAL  --  Esta función envuelve el "/DISPATCH/ACTION" solo para legibilidad. */

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map(product => (
          <li key={product.id} className="product-list-item">
            <span>{product.name} - S/.{product.price}</span>
            {/* "product" pertenece a DB2 estática
                "item"  pertenece a DB2 dinámica */}
            <button                                                                                               /* <BUTTON>  ------------------------------------------------------------------------ */
              className={`add-to-cart-btn ${cartItems.some(item => item.id === product.id) ? "disabled" : ""}`}   /* aplica CSS condicional */
              onClick={() => handleAddToCart(product)}                                                            /* ~~OPCIONAL  --  Esta función envuelve el "/DISPATCH/ACTION" solo para legibilidad. */
              disabled={cartItems.some(item => item.id === product.id)}                                           /* inhabilita el input <button> */
            >{cartItems.some(item => item.id === product.id) ? "Añadido" : "Añadir al carrito"}</button>          {/* CONTENIDO DEL <BUTTON> -----------------------------------------------------------*/}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
