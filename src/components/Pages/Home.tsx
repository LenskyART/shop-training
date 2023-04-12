import React, { useState } from 'react';
import { Iproduct } from '../../models';
import { Card } from '../Card';
import { useDispatch, useSelector } from 'react-redux';
import { initAddAllProductAction } from '../../store/Actions';
import { homeContext } from '../../context';
import { List } from '../List';

export const Home = () => {
  const [activeList, setActiveList] = React.useState(false);

  const dispatch = useDispatch();
  const productsHome = useSelector(
    (state: { products: { productsHome: Iproduct[] } }) => state.products.productsHome
  );
  const favorites = useSelector(
    (state: { products: { favorites: Iproduct[] } }) => state.products.favorites
  );
  const cart = useSelector(
    (state: { products: { cart: Iproduct[] } }) => state.products.cart
  );

  React.useEffect(() => {
    dispatch(initAddAllProductAction());
  }, []);

  const [searchValue, setSearchValue] = useState<string>('');

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const clearSearchInput = () => setSearchValue('');

  const toActiveList = () => {
    setActiveList(!activeList);
  };

  const examAddedCart = (id: string) => cart.some((cartEl) => cartEl.id === id);
  const examAddedFavor = (id: string) => favorites.some((favorEl) => favorEl.id === id);

  return (
    <homeContext.Provider value={{ examAddedCart, examAddedFavor }}>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <div className="nameList">
            <h1 onClick={toActiveList}>
              {searchValue ? `Поиско по запросу: "${searchValue}"` : 'Вся мебель'}
            </h1>
            <List display={activeList} />
          </div>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
              type="text"
            />
            {searchValue ? (
              <img
                onClick={clearSearchInput}
                className="clear cu-p"
                src="/img/remove.svg"
                alt="close"
              />
            ) : null}
          </div>
        </div>

        <div className="cards d-flex flex-wrap">
          {productsHome
            .filter((product) =>
              product.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((product) => (
              <Card product={product} key={product.id} />
            ))}
        </div>
      </div>
    </homeContext.Provider>
  );
};
