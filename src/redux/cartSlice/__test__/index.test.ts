import { waitFor } from '@testing-library/react';
import {
  addItem,
  clearCart,
  fetchItemsAsync,
  getCart,
  getItems,
  getItemsStatus,
  IItem,
  updateCart,
} from '..';
import { fetchItems as fetched } from '../../../api/fetchItems';
import { store } from '../../../app/store';
import { cartItems } from '../../../__mock__/cartItems';

jest.mock('../../../api/fetchItems');
const fetchItems = fetched as jest.MockedFunction<typeof fetched>;

const firstItem = [{ id: 1, name: 'item1', price: 100, quantity: 1 }];
const item: IItem = { id: Date.now(), name: 'nameItem', price: 1000 };

describe('Cart Reducer', () => {
  test('Should call fetchItemAsync Success', async () => {
    fetchItems.mockResolvedValue(cartItems);
    await waitFor(() => {
      store.dispatch(fetchItemsAsync());
      const loading = getItemsStatus(store.getState());
      expect(loading).toEqual('loading');
    });
    const status = getItemsStatus(store.getState());
    expect(status).toEqual('idle');
  });

  test('Should call fetchItemAsync Failed', async () => {
    fetchItems.mockRejectedValue('Error');
    await store.dispatch(fetchItemsAsync());
    const status = getItemsStatus(store.getState());
    expect(status).toEqual('failed');
  });

  test('getItems function should get an empty Array', () => {
    const items = getItems(store.getState());
    expect(items).toHaveLength(0);
  });

  test('getcart function should get an empty Array', () => {
    const cartList = getCart(store.getState());
    expect(cartList).toHaveLength(0);
  });

  test('updateCart function should add an Item to Cart', async () => {
    store.dispatch(updateCart(firstItem));
    expect(getCart(store.getState())).toHaveLength(1);
  });

  test('clearCart function should clear CartList items', () => {
    store.dispatch(updateCart(firstItem));
    expect(getCart(store.getState())).toEqual(firstItem);
    store.dispatch(clearCart());
    expect(getCart(store.getState())).toEqual([]);
  });

  test('addItem function should add an item to list', () => {
    expect(getItems(store.getState())).toEqual([]);
    store.dispatch(addItem(item));
    expect(getItems(store.getState())).toEqual([item]);
  });
});
