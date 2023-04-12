import { Iproduct } from '../models';
import axios from 'axios';

export const asyncAddProductsHome = async () => {
  try {
    const response: { data: Iproduct[] } = await axios.get(
      'https://635922f0c27556d2894ca9b2.mockapi.io/Products'
    );
    return response.data;
  } catch (error) {
    throw new Error(
      // @ts-ignore
      `Error in 'asyncAddUsers(https://jsonplaceholder.typicode.com/users)': ${error.message}`
    );
  }
};

export const asyncAddToFavorites = async () => {
  try {
    const response: { data: Iproduct[] } = await axios.get(
      'https://635922f0c27556d2894ca9b2.mockapi.io/favorites'
    );
    return response.data;
  } catch (error) {
    throw new Error(
      // @ts-ignore
      `Error in 'asyncAddToFavorites(https://jsonplaceholder.typicode.com/users)': ${error.message}`
    );
  }
};

export const asyncAddCartToCart = async () => {
  try {
    const response: { data: Iproduct[] } = await axios.get(
      'https://635922f0c27556d2894ca9b2.mockapi.io/cart'
    );
    return response.data;
  } catch (error) {
    throw new Error(
      // @ts-ignore
      `Error in 'asyncAddCart(https://jsonplaceholder.typicode.com/users)': ${error.message}`
    );
  }
};
