import { createSelector } from '@reduxjs/toolkit';
import { AppRootState } from '../../../lib/types/screen';

const selectProductsage = (state: AppRootState) => state.productsPage;

export const retreiveRestaurant = createSelector(
  selectProductsage,
  (productsPage) => productsPage.restaurant
);

export const retreiveChosenProduct = createSelector(
  selectProductsage,
  (productsPage) => productsPage.choosenProduct
);

export const retreiveProducts = createSelector(
  selectProductsage,
  (productsPage) => productsPage.products
);
