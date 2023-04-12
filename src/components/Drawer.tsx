import { Iproduct } from '../models';
import { isEmpty } from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { removeProductActionFromCart } from '../store/Actions';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface OnClickCartProps {
  onClose: () => void;
}

export const Drawer = ({ onClose }: OnClickCartProps) => {
  const dispatch = useDispatch();
  const cart = useSelector(
    (state: { products: { cart: Iproduct[] } }) => state.products.cart
  );

  const removeProduct = (id: string) => {
    dispatch(removeProductActionFromCart(id));
    axios.delete(`https://635922f0c27556d2894ca9b2.mockapi.io/cart/${id}`);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={onClose}
            className="cartRemove cu-p"
            src="/img/remove.svg"
            alt="close"
          />
        </h2>

        {isEmpty(cart) ? (
          <div className="cartEmpty">
            <img className="imgCartEmpty" src="/img/cart.svg" alt="cart" />
            <h2>Корзина пуста</h2>
            <p>
              Добавьте хотя бы одну вещь, <br /> чтобы сделать заказ
            </p>
            <button onClick={onClose} className="greenButton">
              <img src="../img/arrowLeft.svg" alt="arrow" />
              Вернуться назад
            </button>
          </div>
        ) : (
          <>
            <div className="cartItems">
              {cart.map(({ id, image, title, price }) => (
                <div key={id} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${image})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="cartItemText">
                    <p className="mb-5">{title}</p>
                    <b>{price} руб.</b>
                  </div>
                  <img
                    onClick={() => removeProduct(id)} //vinesi
                    className="cartRemove"
                    src="/img/remove.svg"
                    alt="remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li className="d-flex">
                  <span>Скидка 0%:</span>
                  <div></div>
                  <b>0 руб.</b>
                </li>
                <li className="d-flex">
                  <span>Итого:</span>
                  <div></div>
                  <b>{cart.reduce((acc, product) => acc + product.price, 0)} руб.</b>
                </li>
              </ul>
              <Link to={'/pureChase'}>
                <button onClick={onClose} className="greenButton">
                  <p>Перейти к оформлению</p>
                  <img src="/img/arrow.svg" alt="arrow" />
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
