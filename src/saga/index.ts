import { fork } from 'redux-saga/effects';
import { productsWatcher } from './ProductSaga';

export function* rootWatcher() {
  yield fork(productsWatcher);
}
