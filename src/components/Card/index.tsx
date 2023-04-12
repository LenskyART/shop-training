import React, { useContext } from 'react';
import ContentLoader from 'react-content-loader';
import { Iproduct } from '../../models';
import styles from './Card.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductActionToCart,
  removeProductActionFromCart,
  addProductActionToFavorites,
  removeProductActionFromFavorites
} from '../../store/Actions';
import axios from 'axios';
import { homeContext } from '../../context';

interface ProductProps {
  product: Iproduct;
}

export const Card = ({ product }: ProductProps) => {
  const loader = useSelector((state: { loader: { load: boolean } }) => state.loader.load);
  const { examAddedFavor, examAddedCart } = useContext(homeContext);
  const [addedFavor, setAddedFavor] = React.useState(false);

  React.useEffect(() => {
    examAddedFavor && setAddedFavor(examAddedFavor(product.id));
  }, []);

  const dispatch = useDispatch();

  const onClickPlus = () => {
    if (examAddedCart && examAddedCart(product.id)) {
      dispatch(removeProductActionFromCart(product.id));
      axios.delete(`https://635922f0c27556d2894ca9b2.mockapi.io/cart/${product.id}`);
    } else {
      dispatch(addProductActionToCart(product));
      axios.post(`https://635922f0c27556d2894ca9b2.mockapi.io/cart/`, product);
    }
  };

  const onClickFavor = () => {
    setAddedFavor(!addedFavor);
    if (examAddedFavor && examAddedFavor(product.id)) {
      dispatch(removeProductActionFromFavorites(product.id));
      axios.delete(`https://635922f0c27556d2894ca9b2.mockapi.io/favorites/${product.id}`);
    } else {
      dispatch(addProductActionToFavorites(product));
      axios.post(`https://635922f0c27556d2894ca9b2.mockapi.io/favorites/`, product);
    }
  };

  return (
    <div className={styles.card}>
      {loader ? (
        <>
          <ContentLoader
            speed={2}
            width={190}
            height={250}
            viewBox="0 0 190 250"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="10" ry="10" width="150" height="135" />
            <rect x="0" y="149" rx="10" ry="10" width="137" height="24" />
            <rect x="0" y="200" rx="10" ry="10" width="80" height="32" />
            <rect x="118" y="200" rx="10" ry="10" width="32" height="32" />
          </ContentLoader>
        </>
      ) : (
        <>
          <div className={addedFavor ? styles.favoriteActive : styles.favorite}>
            <img
              onClick={onClickFavor}
              src={addedFavor ? '/img/like2.svg' : '/img/like1.svg'}
              alt="like"
            />
          </div>
          <img width={150} height={135} src={product.image} alt="Картинка" />
          <h5>{product.title}</h5>
          <div className="d-flex justify-between align-center cartFooter">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{product.price} руб.</b>
            </div>
            <img
              width={15}
              height={15}
              src={
                examAddedCart && examAddedCart(product.id)
                  ? '/img/checked.svg'
                  : '/img/plus.svg'
              }
              alt=""
              onClick={onClickPlus}
              className={
                examAddedCart && examAddedCart(product.id)
                  ? styles.cartButtonChecked
                  : styles.cartButton
              }
            />
          </div>
        </>
      )}
    </div>
  );
};
