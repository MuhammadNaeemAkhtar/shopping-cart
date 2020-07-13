


export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            // If product is already in the cart, then increase it's items. Otherwise add new product in cart.
            /* state.cart.some( (p) => console.log(p));
            return {
                ...state,
                cart: [ action.payload, ...state.cart ]
            } */
            if (state.cart.some((p) => p.id === action.payload.id)) {
                cart = state.cart.map((p) => {
                if (p.id === action.payload.id) {
                    p.items++;
                }
                return p;
                });
            } else {
                cart = [...state.cart, action.payload];
            }
            
        default:
            return state
    }
}