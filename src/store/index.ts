import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';
import { productsReducer } from './productsReducer';
import { LoaderReducer } from './LoaderReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  products: productsReducer,
  loader: LoaderReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);
