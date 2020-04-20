import recipeTypes from '../types/recipe.types';

const INITIAL_STATE = {
  coverImage: null,
  ingredients: [],
};

export default (
  state = INITIAL_STATE,
  action: {type: string; payload?: any},
) => {
  switch (action.type) {
    case recipeTypes.FETCH_RECIPE: {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
};
