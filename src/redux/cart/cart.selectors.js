import {createSelector} from "reselect";

const selectCart = state => state.cart; //Input selector
// An input selector is a function that returns a slice of state.

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);
// first argument of createSelector is an array of input selectors
// second argument is the value we want returned from the selector

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) =>
        accumulatedQuantity + (cartItem.quantity * cartItem.price), 0)
);
