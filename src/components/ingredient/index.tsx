import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

Icon.loadFont();

import styles from './styles';

export type IngredientProps = {
  id: number;
  name: string;
  backgroundImage: string;
  price: number;
  image: string;
};

const Ingredient: React.SFC<IngredientProps> = ({name, price, image}) => {
  const [quantity, setQuantity] = React.useState(0);
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
          onPress={() => (quantity > 0 ? setQuantity(quantity - 1) : null)}
        />
        <Text style={styles.quantityLabel}>{quantity}</Text>
        <Icon
          name="plus"
          size={40}
          onPress={() => quantity < 10 && setQuantity(quantity + 1)}
        />
      </View>
    </View>
  );
};

export default Ingredient;
