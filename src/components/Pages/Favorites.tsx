import { Iproduct } from '../../models';
import { Card } from '../Card';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { initAddFavorProductAction } from '../../store/Actions';
import { homeContext } from '../../context';

export const Favorites = () => {
  const favorites = useSelector(
    (state: { products: { favorites: Iproduct[] } }) => state.products.favorites
  );
  const cart = useSelector(
    (state: { products: { cart: Iproduct[] } }) => state.products.cart
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(initAddFavorProductAction());
  }, []);

  const examAddedCart = (id: string) => cart.some((cartEl) => cartEl.id === id);
  const examAddedFavor = (id: string) =>
    favorites.some((favorEl) => favorEl.id === id) || true;

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <div className="namePage">
          <h1>Избранное</h1>
        </div>
      </div>
      <homeContext.Provider value={{ examAddedCart, examAddedFavor }}>
        <div className="cards d-flex flex-wrap">
          {favorites.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </homeContext.Provider>
    </div>
  );
};
