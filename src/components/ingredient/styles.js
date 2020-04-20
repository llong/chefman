import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 32,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  imageContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    width: 64,
    height: 64,
    marginRight: 16,
  },
  image: {
    resizeMode: 'cover',
    width: 96,
    height: 96,
    marginBottom: 8,
  },
  textContainer: {
    flexShrink: 1,
    justifyContent: 'center',
    paddingRight: 16,
  },
  nameText: {
    fontSize: 18,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityContainer: {
    alignItems: 'center',
    marginLeft: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 116,
  },
  quantityLabel: {
    fontSize: 32,
  },
});
