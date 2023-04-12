import { call, put, takeLatest } from 'redux-saga/effects';
import {
  addManyProductsAction,
  addManyProductsActionToFavorites,
  addManyProductsActionToCart
} from '../store/Actions';
import { Iproduct } from '../models';
import {
  asyncAddProductsHome,
  asyncAddCartToCart,
  asyncAddToFavorites
} from './AxiosAsyncAPI';

function* asyncAddProductsWorker() {
  yield put({ type: 'IS_LOADER', payload: true });
  const dataCart: Iproduct[] = yield call(asyncAddCartToCart);
  const dataFavor: Iproduct[] = yield call(asyncAddToFavorites);
  const dataProductHome: Iproduct[] = yield call(asyncAddProductsHome);

  yield put(addManyProductsActionToFavorites(dataFavor));
  yield put(addManyProductsActionToCart(dataCart));
  yield put(addManyProductsAction(dataProductHome));
  yield put({ type: 'IS_LOADER', payload: false });
}

function* asyncAddProductsFavorWorker() {
  yield put({ type: 'IS_LOADER', payload: true });
  const dataCart: Iproduct[] = yield call(asyncAddCartToCart);
  const dataFavor: Iproduct[] = yield call(asyncAddToFavorites);

  yield put(addManyProductsActionToFavorites(dataFavor));
  yield put(addManyProductsActionToCart(dataCart));
  yield put({ type: 'IS_LOADER', payload: false });
}

function* asyncAddProductsCartWorker() {
  yield put({ type: 'IS_LOADER', payload: true });
  const dataCart: Iproduct[] = yield call(asyncAddCartToCart);
  yield put(addManyProductsActionToCart(dataCart));
  yield put({ type: 'IS_LOADER', payload: false });
}

export function* productsWatcher() {
  yield takeLatest('INIT_ADD_ALL_PRODUCTS', asyncAddProductsWorker);
  yield takeLatest('INIT_ADD_FAVOR_PRODUCTS', asyncAddProductsFavorWorker);
  yield takeLatest('INIT_ADD_CART_PRODUCTS', asyncAddProductsCartWorker);
}
