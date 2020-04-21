import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import {
  addItemToCart,
  removeItemFromCart,
} from '../../store/actions/shoppingCart.actions';

Icon.loadFont();

import styles from './styles';

export type IngredientProps = {
  id: number;
  name: string;
  backgroundImage: string;
  price: number;
  image: string;
  quantity?: number | undefined;
  addItemToCart: any;
  removeItemFromCart: any;
  items: Array<IngredientProps>;
};

const Ingredient: React.SFC<IngredientProps> = ({
  image,
  name,
  price,
  id,
  addItemToCart: doAddItemToCart,
  removeItemFromCart: doRemoveItemFromCart,
  items,
}) => {
  const getQuantity = () => {
    const item = items.find((ingredient) => ingredient.id === id);
    return item?.quantity || 0;
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground style={styles.image} source={{uri: image}} />
      </View>
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.nameText}>
          {name}
        </Text>
        <Text style={styles.priceText}>${price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Icon
          name="minus"
          size={40}
          onPress={() => doRemoveItemFromCart({name, image, price, id})}
        />
        <Text style={styles.quantityLabel}>{getQuantity()}</Text>
        <Icon
          name="plus"
          size={40}
          onPress={() => doAddItemToCart({name, image, price, id})}
        />
      </View>
    </View>
  );
};

const mapStateTopProps = (state: any) => ({
  items: state.shoppingCart.items,
});

export default connect(mapStateTopProps, {addItemToCart, removeItemFromCart})(
  Ingredient,
);
