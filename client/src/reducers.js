// import { combineReducers } from 'redux'
import * as Actions from './actions'

const store = function cart(state = {shoppingCartSize: 0, shoppingCart: []}, action) {
    var product, tempShoppingCart;
    switch (action.type) {
        case Actions.ADD_ITEM:

            // find the product
            product = state.shoppingCart && state.shoppingCart.find((item) => {
                return Number(item.productId) === Number(action.productId);
            });

            // // if they don't have the item in their shopping cart
            if (!product) {
                if (state.shoppingCart) {
                    state = {
                        ...state,
                        shoppingCartSize: state.shoppingCartSize + action.quantity,
                        shoppingCart: [
                            ...state.shoppingCart,
                            {
                                productId: Number(action.productId),
                                quantity: action.quantity
                            }
                        ]
                    }
                } else {
                    state = {
                        ...state,
                        shoppingCartSize: action.quantity,
                        shoppingCart: [
                            {
                                productId: Number(action.productId),
                                quantity: action.quantity
                            }
                        ]
                    }
                }

                return state;
            } else {

                // find the item and update it's quantity
                tempShoppingCart = state.shoppingCart;
                tempShoppingCart.forEach((item, index) => {
                    if (item.productId === action.productId) {
                        state.shoppingCart[index] = {
                            productId: Number(action.productId),
                            quantity: action.quantity + item.quantity
                        }
                    }
                });

                state = {
                    ...state,
                    shoppingCartSize: state.shoppingCartSize += action.quantity,
                    shoppingCart: tempShoppingCart
                }
                return state;
            }

        case Actions.GET_CART:
            return state.shoppingCart;

        case Actions.UPDATE_QUANTITY:
            // find the product
            product = state.shoppingCart && state.shoppingCart.find((item) => {
                return item.productId === action.productId;
            });

            // // if they don't have the item in their shopping cart
            if (product) {
                tempShoppingCart = state.shoppingCart;
                var cartSize = state.shoppingCartSize;
                cartSize -= product.quantity;

                // if the quantity is 0, remove the element
                if (action.quantity === 0) {
                    var index = tempShoppingCart.indexOf(product);
                    tempShoppingCart = tempShoppingCart.splice(index, index);
                } else {
                    // add the new quantity to the cartSize
                    cartSize += action.quantity;

                    // find the item and update it's quantity
                    tempShoppingCart.forEach((item, index) => {
                        if (item.productId === action.productId) {
                            tempShoppingCart[index] = {
                                productId: action.productId,
                                quantity: action.quantity
                            }
                        }
                    });
                }
                state = {
                    ...state,
                    shoppingCartSize: cartSize,
                    shoppingCart: tempShoppingCart
                }
                return state;
            }

            return state;

        default:
            return state;
    }
}

export default store;