import { combineReducers } from 'redux'
import { ADD_ITEM } from './actions'

const shoppingCart = function cart(state = [], action) {
    switch (action.type) {
        case ADD_ITEM:

            // var product = state.find((item) => {
            //     return item.productId === action.productId;
            // });

            // if they don't have the item in their shopping cart
            // if (!product) {
                return [
                    ...state,
                    {
                        productId: action.productId,
                        quantity: action.quantity
                    }
                ]
            // } else {
            //     var tempState = state;
            //     tempState.forEach((item, index) => {
            //         if (item.productId === product.productId) {
            //             state[index] = {
            //                 productId: action.productId,
            //                 quantity: action.quantity + product.quantity
            //             }
            //         }
            //     });
            //     setState
            //     return state;
            // }

        default:
            return state;
    }
}

// const shoppingCart = combineReducers({
//     cart
// });

export default shoppingCart;