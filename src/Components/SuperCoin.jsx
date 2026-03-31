// Componente3   ---   es meramente una "notificación al usuario"
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";                 // "render()" depende de "useSelector"

const SuperCoins = () => {
    const dispatch = useDispatch()                                      // XD -- no se usó
    const [superCoins, setSuperCoins] = useState(0);
    const cartItems = useSelector((state) => (state.cart.cartItems));
    const totalAmount = cartItems.reduce((acc, item) => (acc + item.price * item.quantity), 0);

    useEffect(() => {                                                   // INEFICIENTE -- Mejor usar "OPERADOR TERNARIO ENCADENADO". este hook debió omitirse en este laboratorio de IBM. 
        if (totalAmount >= 100 && totalAmount < 200) {
            setSuperCoins(10)
        } else if (totalAmount >= 200 && totalAmount < 300) {
            setSuperCoins(20)
        } else if (totalAmount >= 300) {
            setSuperCoins(30)
        } else {
            setSuperCoins(0)
        }
    }, [totalAmount]);

    return (
        <div className="super-coins" style={{ textAlign: "center" }}>
            <h2 className="super-coins-title">Super Coins</h2>
            <p className="super-coins-info">Con esta compra ganarás {superCoins} super coins</p>
        </div>);
};

export default SuperCoins;