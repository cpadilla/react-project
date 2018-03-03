// import { combineReducers } from 'redux'
import * as Actions from './actions'

const store = function cart(state = {shoppingCartSize: 0, shoppingCart: []}, action) {
    switch (action.type) {
        case Actions.ADD_ITEM:

            var product = state.shoppingCart && state.shoppingCart.find((item) => {
                return item.productId === action.productId;
            });

            // // if they don't have the item in their shopping cart
            if (!product) {
                state = {
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

                var tempState = state;
                tempState.shoppingCart.forEach((item, index) => {
                    if (item.productId === action.productId) {
                        state.shoppingCart[index] = {
                            productId: action.productId,
                            quantity: action.quantity + item.quantity
                        }
                    }
                });
                state = tempState;
                return state;
            }

        case Actions.GET_CART:
            return state.shoppingCart;

        default:
            return state;
    }
}

export default store;