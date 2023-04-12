import { Iproduct } from '../../models';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { initAddCartProductAction } from '../../store/Actions';
import { Slider } from '../slider';

export const PureChase = () => {
  const cart = useSelector(
    (state: { products: { cart: Iproduct[] } }) => state.products.cart
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(initAddCartProductAction());
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <div className="namePage">
          <h1>Оформление</h1>
        </div>
      </div>
      <div className="cards d-flex flex-wrap">
        <Slider />
      </div>
    </div>
  );
};
