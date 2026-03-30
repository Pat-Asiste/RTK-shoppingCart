import React from 'react';
import './ShoppingCart.css';
import { useDispatch, useSelector } from "react-redux";
import {                                                                                          /* ACTIONS --------------------------------------   */
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity
} from "./CartSlice.jsx";

const ShoppingCart = () => {
  const dispatch = useDispatch();                                                                 /* "const"  --  deben ir dentro del COMPONENTE, porque no son "GLOBALES" */
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce((total, item) => (total + item.price * item.quantity), 0)  /* " .reduce() "  --  ES PARECIDO AL BUCLE "FOR"   .reduce((acc,num) => (acc + num), initialValue) */

  const handleRemoveItem = (itemId) => (dispatch(removeItemFromCart(itemId)));                    /* OPCIONALES -- solo son para LEGIBILIDAD */
  const handleClearCart = () => (dispatch(clearCart()));
  const handleIncreaseQuantity = (itemId) => (dispatch(increaseItemQuantity(itemId)));
  const handleDecreaseQuantity = (itemId) => (dispatch(decreaseItemQuantity(itemId)));

  return (
    <>
      <div className="shopping-cart">
        <h2 className="shopping-cart-title">Shopping Cart</h2>
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">

              <span>{item.name} - S/.{item.price}</span>
              <div className="quantity-controls">
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <button onClick={() => handleRemoveItem(item.id)} className="remove-item-btn">Remover</button>

            </li>
          ))}
        </ul>
        <button onClick={() => handleClearCart()} className="clear-cart-btn">Clear Cart</button>
        <div>{totalAmount ? <div>El monto total es {totalAmount}</div> : ""}</div>
      </div>

    </>
  );
};

export default ShoppingCart;
