import { Iproduct } from '../models';

export const initAddAllProductAction = () => ({
  type: 'INIT_ADD_ALL_PRODUCTS'
});

//productsHome
export const addManyProductsAction = (payload: Iproduct[]) => ({
  type: 'ADD_MANY_PRODUCTS',
  payload
});

//cart
export const initAddCartProductAction = () => ({
  type: 'INIT_ADD_CART_PRODUCTS'
});

export const addManyProductsActionToCart = (payload: Iproduct[]) => ({
  type: 'ADD_MANY_PRODUCTS_TO_CART',
  payload
});

export const addProductActionToCart = (payload: Iproduct) => ({
  type: 'ADD_PRODUCT_TO_CART',
  payload
});

export const removeProductActionFromCart = (payload: string) => ({
  type: 'REMOVE_PRODUCT_FROM_CART',
  payload
});

//favorites
export const addManyProductsActionToFavorites = (payload: Iproduct[]) => ({
  type: 'ADD_MANY_PRODUCTS_TO_FAVORITES',
  payload
});

export const initAddFavorProductAction = () => ({
  type: 'INIT_ADD_FAVOR_PRODUCTS'
});

export const addProductActionToFavorites = (payload: Iproduct) => ({
  type: 'ADD_PRODUCT_TO_FAVORITES',
  payload
});

export const removeProductActionFromFavorites = (payload: string) => ({
  type: 'REMOVE_PRODUCT_FROM_FAVORITES',
  payload
});

// loader
