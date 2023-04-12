export interface Iproduct {
  id: string;
  title: string;
  price: number;
  image: string;
  key?: number;
}

//productsHome
interface ActionAddManyProducts {
  type: 'ADD_MANY_PRODUCTS';
  payload: Iproduct[];
}

//cart
interface ActionAddManyProductsToCart {
  type: 'ADD_MANY_PRODUCTS_TO_CART';
  payload: Iproduct[];
}

interface ActionAddProductToCart {
  type: 'ADD_PRODUCT_TO_CART';
  payload: Iproduct;
}

interface ActionRemoveProductFromCart {
  type: 'REMOVE_PRODUCT_FROM_CART';
  payload: string;
}

//favorites
interface ActionAddManyProductsToFavorites {
  type: 'ADD_MANY_PRODUCTS_TO_FAVORITES';
  payload: Iproduct[];
}

interface ActionAddProductToFavorites {
  type: 'ADD_PRODUCT_TO_FAVORITES';
  payload: Iproduct;
}

interface ActionRemoveProductToFavorites {
  type: 'REMOVE_PRODUCT_FROM_FAVORITES';
  payload: string;
}

export type IActionProduct =
  | ActionAddManyProducts
  //cart
  | ActionAddManyProductsToCart
  | ActionAddProductToCart
  | ActionRemoveProductFromCart
  //favor
  | ActionAddManyProductsToFavorites
  | ActionRemoveProductToFavorites
  | ActionAddProductToFavorites;

export interface IActionLoader {
  type: string;
  payload: boolean;
}
