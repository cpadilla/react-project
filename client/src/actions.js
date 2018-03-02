/*
 * Action types
 */

 export const ADD_ITEM = 'ADD_ITEM';


 /*
  * Action creators
  */

 export function addItemToCart(productId, quantity) {
     return { type: ADD_ITEM, productId, quantity }
 }