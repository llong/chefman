import {combineReducers} from 'redux';
import shoppingCartReducer from './shoppingCart.reducer';
import recipeReducer from './recipe.reducer';

export default combineReducers({
  shoppingCart: shoppingCartReducer,
  recipe: recipeReducer,
});
