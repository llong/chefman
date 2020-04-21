import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import Button from '../../components/Button';

import styles from './styles';
import {IngredientProps} from '../../components/ingredient';

const CheckoutScreen: React.SFC = ({cart}) => {
  const [store, setStore] = useState('publix');

  const renderCartItems = () => {
    if (cart.length) {
      return cart.map((cartItem: IngredientProps) => (
        <View key={cartItem.id} style={styles.checkoutItem}>
          <Text
            style={
              styles.checkoutItemText
            }>{`${cartItem.name} x ${cartItem.quantity}`}</Text>
          <Text style={styles.checkoutItemPrice}>
            ${(cartItem.price * cartItem.quantity).toFixed(2)}
          </Text>
        </View>
      ));
    }
    return <Text>Your cart it empty</Text>;
  };

  const chooseStore = () => {
    return (
      <>
        <Text style={styles.header}>Choose Store</Text>
        <View style={styles.storesContainer}>
          <Text
            style={[
              styles.storeLabel,
              store === 'publix' ? styles.storeSelected : null,
            ]}
            onPress={() => setStore('publix')}>
            Publix - 2.2 miles away
          </Text>
          <Text
            style={[
              styles.storeLabel,
              store === 'whole foods' ? styles.storeSelected : null,
            ]}
            onPress={() => setStore('whole foods')}>
            Whole Foods - 3.2 miles away
          </Text>
          <Text
            style={[
              styles.storeLabel,
              store === 'trader joes' ? styles.storeSelected : null,
            ]}
            onPress={() => setStore('trader joes')}>
            Trader Joes - 5.1 miles away
          </Text>
        </View>
        <Text>Estimated Delivery Time: {calculateDeliveryTime()}</Text>
      </>
    );
  };

  const calculateDeliveryTime = () => {
    switch (store) {
      case 'publix':
        return '30 minutes';
      case 'whole foods':
        return '50 minutes';
      case 'trader joes':
        return '1 hour';
    }
  };

  const shoppingCartTotal = cart.reduce(
    (total: number, item: IngredientProps) => {
      return item.price * item.quantity + total;
    },
    0,
  );

  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.content}>
            <Text style={styles.header}>Items In Your Cart</Text>
            {renderCartItems()}
            {chooseStore()}
          </View>
        </ScrollView>
        {cart.length && (
          <View style={styles.footer}>
            <Text style={styles.shoppingCartTotal}>
              Your total: ${shoppingCartTotal}
            </Text>
            <Button>Checkout</Button>
          </View>
        )}
      </View>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  cart: state.shoppingCart.items,
});

export default connect(mapStateToProps)(CheckoutScreen);
