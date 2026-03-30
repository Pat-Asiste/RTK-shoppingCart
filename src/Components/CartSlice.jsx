// Componente2/Slice
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: { cartItems: [], },
    // LÓGICA DE ESTADO
    reducers: {                                                                                 //tipo: obj{}
        addItemToCart(state, action) {                                                          //tipo: propiedad   --  separa con comas ,
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);   //tipo: instrucción --  separa con ;
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            state.cartItems = [];
        },
        increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }
        },
        decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {                                //"Evaluación de cortocircuito" en JS
                itemToDecrease.quantity -= 1;
            }
        }
    },
});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity
} = CartSlice.actions;                                                                          //"Desestructuración de objetos" en JS

export default CartSlice.reducer;