import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Drawer } from './Drawer';
import { useCallback, useState } from 'react';
import { Iproduct } from '../models';
import { useSelector } from 'react-redux';

export const Layout = () => {
  const cart = useSelector(
    (state: { products: { cart: Iproduct[] } }) => state.products.cart
  );

  const [cartOpened, setCartOpened] = useState(false);
  const onOpenHandler = useCallback(() => setCartOpened(true), []);
  const onCloseHandler = useCallback(() => setCartOpened(false), []);
  const sumProductCart = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={onCloseHandler} />}
      <Header onClickCart={onOpenHandler} sumProductCart={sumProductCart} />

      <Outlet />
    </div>
  );
};
