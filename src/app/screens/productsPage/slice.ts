import { createSlice } from '@reduxjs/toolkit';
import { ProductsPageState } from '../../../lib/types/screen';

const initialState: ProductsPageState = {
  restaurant: null,
  choosenProduct: null,
  products: [],
};

const productsPageSlice = createSlice({
  name: 'productsPage',
  initialState,
  reducers: {
    setRestauarnt: (state, action) => {
      state.restaurant = action.payload;
    },

    setChosenProduct: (state, action) => {
      state.choosenProduct = action.payload;
    },

    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setRestauarnt, setChosenProduct, setProducts } =
  productsPageSlice.actions;

const ProductsPageReducer = productsPageSlice.reducer;
export default ProductsPageReducer;
