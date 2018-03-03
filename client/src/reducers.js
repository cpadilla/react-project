// import { combineReducers } from 'redux'
import * as Actions from './actions'

const store = function cart(state = {shoppingCartSize: 0, shoppingCart: []}, action) {
    switch (action.type) {
        case Actions.ADD_ITEM:

            // state.shoppingCartSize += action.quantity;

            var product = state.shoppingCart && state.shoppingCart.find((item) => {
                return item.productId === action.productId;
            });

            // // if they don't have the item in their shopping cart
            if (!product) {
                state = {
                    ...state,
                    shoppingCartSize: state.shoppingCartSize += action.quantity,
                    shoppingCart: [
                        ...state.shoppingCart,
                        {
                            productId: action.productId,
                            quantity: action.quantity
                        }
                    ]
                }

                return state;
            } else {

                var tempShoppingCart = state.shoppingCart;
                tempShoppingCart.forEach((item, index) => {
                    if (item.productId === action.productId) {
                        state.shoppingCart[index] = {
                            productId: action.productId,
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

        default:
            return state;
    }
}

export default store;