import React, {useEffect} from 'react';
import {Text, View, ScrollView, ImageBackground} from 'react-native';
import {connect} from 'react-redux';

import Ingredient, {IngredientProps} from '../../components/ingredient';

import {fetchRecipe} from '../../store/actions/recipe.actions';
import styles from './styles';

interface Props {
  fetchRecipe: () => {
    ingredients: Array<IngredientProps>;
  };
  recipe: {
    recipe: string;
    coverPhotoUri: string;
    ingredients: Array<IngredientProps>;
  };
}

const HomeScreen: React.FC<Props> = ({
  fetchRecipe: doFetchRecipe,
  recipe: recipe,
}) => {
  useEffect(() => {
    doFetchRecipe();
  }, [doFetchRecipe]);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: recipe.coverPhotoUri}}
        style={styles.coverPhoto}>
        <View style={styles.recipeTitleContainer}>
          <Text style={styles.recipeTitle}>{recipe.recipe}</Text>
        </View>
      </ImageBackground>
      <ScrollView contentContainerStyle={{}}>
        <View style={styles.ingredientsContainer}>
          {recipe.ingredients.map((ingredient: IngredientProps) => (
            <Ingredient key={ingredient.id} {...ingredient} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({recipe}: Props) => ({
  recipe,
});

// @ts-ignore
export default connect(mapStateToProps, {fetchRecipe})(HomeScreen);
