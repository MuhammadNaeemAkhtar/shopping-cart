import React, { createContext, useReducer } from 'react';
import { CartReducer } from './CartReducer';

const initialState = {
    products: [],
    cart: [],
}

export const CartContext = createContext(initialState);

const CartContextProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(CartReducer, initialState);

    function addToCart(product) {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                ...product,
                items: 1,
            }
        })
    }

    const decrease = payload => {
        dispatch({
            type: "DECREASE",
            payload
        })
    }

    const addProduct = payload => {
        dispatch({
            type: "ADD_ITEM",
            payload
        })
    }

    const removeProduct = payload => {
        dispatch({
            type: "REMOVE_ITEM",
            payload
        })
    }

    const clearCart = () => {
        dispatch({
            type: "CLEAR"
        })
    }

    const handleCheckout = () => {
        dispatch({
            type: "CHECKOUT"
        })
    }

    return(
        <CartContext.Provider 
            value={{
                products: state.products,
                cart: state.cart,
                addToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;