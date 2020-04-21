import ShoppingCartTypes from '../types/shoppingCart.types';
import {addItemToCart, removeItemFromCart} from '../utils/cartUtils';

const INITIAL_STATE = {
  items: [],
};

export default (
  state = INITIAL_STATE,
  action: {type: string; payload?: any},
) => {
  switch (action.type) {
    case ShoppingCartTypes.ADD_ITEM_TO_CART: {
      return {...state, items: addItemToCart(state.items, action.payload)};
    }
    case ShoppingCartTypes.REMOVE_ITEM_FROM_CART: {
      return {...state, items: removeItemFromCart(state.items, action.payload)};
    }
    default:
      return state;
  }
};
