import React, { forwardRef, useRef } from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import { useSelector } from 'react-redux';
import { Iproduct } from '../models';

const SliderStyle = styled.div`
  display: flex;
  overflow: hidden;
  padding: 0 25px;
  border: 1px solid #f3f3f3;
  border-radius: 40px;
  justify-content: start;

  position: relative;
  min-width: 1000px;

  @media (max-width: 1080px) {
    min-width: auto;
  }
`;

const ShadowBlockStyled = styled.div`
  overflow: hidden;
  position: absolute;
  left: -100px;
  top: 0;
  border-radius: 40px;
  box-shadow: inset 0 0 30px 15px rgba(0, 0, 0, 0.1);
  width: 1150px;
  height: 302px;
  display: flex;
`;

const ButtonSlideStyle = styled.div`
  position: absolute;
  display: flex;
  transition: 0.15s ease-in-out;
  align-items: center;
  justify-content: center;
  height: 302px;
  width: 20px;
  right: ${(props) => props.right || 'auto'};
  left: ${(props) => props.left || 'auto'};

  img {
    opacity: 1;
    margin: 0 ${(props) => props.rightMarg || 0} 0 ${(props) => props.leftMarg || 0};
  }

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);

    img {
      opacity: 1;
    }
  }
`;

const TransportBlock = styled.div`
  display: flex;
  position: relative;
  left: ${(props) => props.transport || 0} px;
`;

// eslint-disable-next-line react/display-name
const CoordsBlock = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref}></div>;
});

interface IX {
  x?: number;
  y?: number;
  height?: number;
  top?: number;
  width?: number;
  right?: number;
  left?: number;
  bottom?: number;
}

export const Slider = () => {
  const coordsRef = useRef<any>();

  let x: IX = {};

  React.useEffect(() => {
    x = coordsRef.current.getBoundingClientRect();
  }, [TransportBlock]);

  const cart = useSelector(
    (state: { products: { cart: Iproduct[] } }) => state.products.cart
  );

  const slideLeft = () => {
    return x.left && x.left - 756;
  };

  return (
    <SliderStyle>
      <ShadowBlockStyled />
      <TransportBlock transport={slideLeft}>
        <CoordsBlock ref={coordsRef} />
        {cart.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </TransportBlock>
      <ButtonSlideStyle onClick={slideLeft} left={'0'} leftMarg={'10px'}>
        <img src="/img/left.svg" alt="left" />
      </ButtonSlideStyle>
      <ButtonSlideStyle right={'0'} rightMarg={'10px'}>
        <img src="/img/right.svg" alt="right" />
      </ButtonSlideStyle>
    </SliderStyle>
  );
};
