import React from 'react';
import { Link } from 'react-router-dom';

interface OnClickCardProps {
  onClickCart: () => void;
  sumProductCart: number;
}

export const Header = ({ onClickCart, sumProductCart }: OnClickCardProps) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to={'/'}>
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/icon.png" alt="Иконка)" />
          <div>
            <h3 className="text-uppercase">Sofa room</h3>
            <p className="opacity-6">Интерьер</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span> {sumProductCart} руб. </span>
        </li>
        <li>
          <Link to={'/favorites'}>
            <img
              className="favorites"
              width={18}
              height={18}
              src="/img/like1.svg"
              alt="favorites"
            />
          </Link>
          <img width={18} height={18} src="/img/profil.svg" alt="profil" />
        </li>
      </ul>
    </header>
  );
};
