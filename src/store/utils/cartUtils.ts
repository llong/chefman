import {IngredientProps} from '../../components/ingredient';

export const addItemToCart = (
  cartItems: Array<IngredientProps>,
  cartItemToAdd: IngredientProps,
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id,
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem,
    );
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

export const removeItemFromCart = (
  cartItems: Array<IngredientProps>,
  cartItemToRemove: IngredientProps,
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id,
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem,
  );
};
