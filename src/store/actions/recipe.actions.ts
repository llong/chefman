import recipeTypes from '../types/recipe.types';
import recipeData from '../../data/ingredients.json';

import {Action} from '../../types/actions.types';

// Simulate fetching Recipe data
export const fetchRecipe = () => {
  return async (dispatch: (arg0: Action) => void) => {
    dispatch({type: recipeTypes.FETCH_RECIPE, payload: recipeData});
  };
};
