import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchItems } from '../../api/fetchItems';
import { RootState } from '../../app/store';
import { createItemAsync } from './thunks';

export interface IItem {
  id: number;
  name: string;
  price: number;
  
}
export interface ICartItem extends IItem {
  quantity: number;
}
export type ICartState = {
  status: 'idle' | 'loading' | 'failed';
  items: IItem[];
  cartList: ICartItem[];
};

export const initialState: ICartState = {
  status: 'idle',
  items: [],
  cartList: [],
};

export const fetchItemsAsync = createAsyncThunk('cart/fetchItems', async () => {
  const response = await fetchItems();
  return response;
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<ICartState['cartList']>) => {
      state.cartList = action.payload;
    },
    clearCart: (state) => {
      state.cartList = [];
    },
    addItem: (state, action: PayloadAction<IItem>) => {
      state.items = [...state.items, action.payload];
    },
  },
  extraReducers: (builder) => {
    // Fetch List Items
    builder
      .addCase(fetchItemsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(fetchItemsAsync.rejected, (state) => {
        state.status = 'failed';
        state.items = [];
      });
    // Create item
    builder
      .addCase(createItemAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createItemAsync.fulfilled, (state, action: PayloadAction<IItem[]>) => {
        state.items = action.payload;
        state.status = 'idle';
      })
  },
});

export const { updateCart, clearCart, addItem } = cartSlice.actions;

export const getItems = (state: RootState) => state.cart.items;
export const getItemsStatus = (state: RootState) => state.cart.status;
export const getCart = (state: RootState) => state.cart.cartList;

export default cartSlice.reducer;
