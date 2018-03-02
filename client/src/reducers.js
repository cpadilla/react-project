import { combineReducers } from 'redux'
import { ADD_ITEM } from './actions'

const shoppingCart = function cart(state = [{productId: 0, quantity:0}], action) {
    switch (action.type) {
        case ADD_ITEM:

            var product = state.find((item) => {
                return item.productId === action.productId;
            });

            // // if they don't have the item in their shopping cart
            if (!product) {
                console.log("state :", state);

                return [
                    ...state,
                    {
                        productId: action.productId,
                        quantity: action.quantity
                    }
                ]
            } else {

                var tempState = state;
                tempState.forEach((item, index) => {
                    if (item.productId === action.productId) {
                        state[index] = {
                            productId: action.productId,
                            quantity: action.quantity + item.quantity
                        }
                    }
                });
                state = tempState;
                return state;
            }

        default:
            return [];
    }
}

// const shoppingCart = combineReducers({
//     cart
// });

export default shoppingCart;