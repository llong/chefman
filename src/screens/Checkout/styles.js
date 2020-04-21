import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 24,
  },
  checkoutItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  checkoutItemText: {
    fontSize: 18,
  },
  checkoutItemPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  storesContainer: {
    backgroundColor: '#e6e6e6',
    borderRadius: 8,
    padding: 16,
  },
  storeSelected: {
    backgroundColor: '#CCCCCC',
  },
  storeLabel: {
    fontSize: 18,
    marginBottom: 20,
    padding: 8,
  },
  shoppingCartTotal: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
  },
});
