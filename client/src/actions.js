/*
 * Action types
 */

 export const ADD_ITEM = 'ADD_ITEM';
 export const GET_CART = 'GET_CART';
 export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';


 /*
  * Action creators
  */

 export function addItemToCart(productId, quantity) {
     return { type: ADD_ITEM, productId, quantity }
 }

 export function getCart() {
     return { type: GET_CART }
 }

 export function updateQuantity(productId, quantity) {
     return { type: UPDATE_QUANTITY, productId, quantity }
 }