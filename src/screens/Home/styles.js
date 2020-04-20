import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  coverPhoto: {
    height: 200,
    backgroundColor: 'red',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  recipeTitleContainer: {
    backgroundColor: 'rgba(0,0,0,0.27)',
    padding: 16,
    alignItems: 'center',
  },
  recipeTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  ingredientsContainer: {marginVertical: 20, marginHorizontal: 16},
});
