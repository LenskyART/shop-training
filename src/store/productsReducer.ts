import { IActionProduct, Iproduct } from '../models';

interface ProductsReducerState {
  productsHome: Iproduct[];
  cart: Iproduct[];
  favorites: Iproduct[];
}

const product: Iproduct = {
  id: '',
  title: '',
  price: 0,
  image: '',
  key: 0
};

const defState: ProductsReducerState = {
  productsHome: [],
  cart: [],
  favorites: []
};

export const productsReducer = (state = defState, action: IActionProduct) => {
  switch (action.type) {
    //productsHome
    case 'ADD_MANY_PRODUCTS':
      return { ...state, productsHome: [...action.payload] };
    //cart
    case 'ADD_MANY_PRODUCTS_TO_CART':
      return { ...state, cart: [...action.payload] };
    case 'ADD_PRODUCT_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_PRODUCT_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload)
      };
    //favorites
    case 'ADD_MANY_PRODUCTS_TO_FAVORITES':
      return { ...state, favorites: [...action.payload] };
    case 'ADD_PRODUCT_TO_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_PRODUCT_FROM_FAVORITES':
      return {
        ...state,
        products: state.favorites.filter((favorite) => favorite.id !== action.payload)
      };
    default:
      return state;
  }
};
