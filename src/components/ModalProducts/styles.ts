import styled from 'styled-components';
import { darken } from 'polished';

export const Overlay = styled.div`
  background: rgba(203, 203, 203, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const Container = styled.div`
  background: #fff;
  padding: 45px 42px;
  display: flex;
  justify-content: center;
  position: relative;

  .ProductsImage {
    margin-right: 20px;
    width: 297px;
    height: 300px;
    --slider-height-percentage: 70%;
    --slider-transition-duration: 500ms;
    --control-bullet-color: #d6613e;
    --control-bullet-active-color: ${darken(0.1, '#d6613e')};
    --control-bullet-width: 10px;
    --loader-bar-color: #fff;
    --loader-bar-height: 2px;
    .awssld__bullets {
      bottom: -30px;
    }
    .awssld__bullets button {
      width: 10px;
      height: 10px;
    }
  }
`;

export const DescriptionProducts = styled.div`
  h4 {
    font-size: 18px;
    max-width: 332px;
    color: var(--product-title-and-button-color);
  }
  .price {
    margin-top: 7px;
    margin-bottom: 24px;
    font-size: 18px;
  }
  .description {
    max-width: 332px;
    margin-bottom: 149px;
    font-size: 14px;
    line-height: 30px;
  }
`;

export const QuantityAndAddCar = styled.div`
  display: flex;
  align-items: center;
  p {
    border: 1px solid #cbcbcb;
    padding: 6px 10px;
    text-align: center;
    border-radius: 4px;
  }
`;

export const ActionButton = styled.button`
  transform: translateY(3px);
  margin-right: 4px;
  margin-left: 4px;
  outline: 0;
  border: 0;
  background: transparent;
  button:hover {
    outline: 0;
  }
`;

export const ButtonForBuyProducts = styled.button`
  border: 0;
  font-size: 0.87rem;
  font-weight: 700;
  background: var(--product-title-and-button-color);
  padding: 0.5rem 2.62rem;
  border-radius: 26px;
  color: var(--white);
  margin-left: 5px;
  outline: 0;
  text-transform: uppercase;
  transition: background-color 0.2s;
`;

export const CloseModal = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: transparent;
  border: 0;
  font-size: 0px;
  outline: 0;
`;
