import React from 'react';
import styled from 'styled-components';

const ListStyle = styled.div`
  display: ${(props) => (props.display ? 'flex' : 'none') || 'none'};
  flex-direction: column;
  align-items: center;
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  padding: 10px;
  position: absolute;
  z-index: 3;
  background: #f5f5f5;
  width: 250px;
  left: -20px;
  transition: background 0.7s ease-in-out;
  box-shadow: black;

  span {
    font-size: 18px;
    color: #3a3a3a;
    font-weight: 500;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 7px;
    cursor: pointer;

    &:hover {
      text-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      color: #373737;
    }
  }
`;

export const List = (props) => {
  return (
    <ListStyle {...props}>
      <span>Прямые диваны</span>
      <span>Евро-диваны &quot;Престиж&quot;</span>
      <span>Диваны &quot;Книжка&quot;</span>
      <span>Диваны &quot;Класика&quot;</span>
      <span>Угловые диваны</span>
      <span>Малогабаритные диваны</span>
      <span>Диваны-трансформеры</span>
      <span>Диваны Лофт</span>
      <span>Детские диваны</span>
      <span>Ортопедические диваны</span>
      <span>Офисные диваны</span>
      <span>Кресла</span>
      <span>Пуфики</span>
      <span>Матрасы</span>
      <span>Кровати</span>
    </ListStyle>
  );
};
