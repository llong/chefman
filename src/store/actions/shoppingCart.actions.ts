import {IngredientProps} from '../../components/ingredient';
import shoppingCartTypes from '../types/shoppingCart.types';

export const addItemToCart = (payload: IngredientProps) => ({
  type: shoppingCartTypes.ADD_ITEM_TO_CART,
  payload,
});

export const removeItemFromCart = (payload: IngredientProps) => ({
  type: shoppingCartTypes.REMOVE_ITEM_FROM_CART,
  payload,
});
