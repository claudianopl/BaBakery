import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  margin: 0 8.63rem;
  h2 {
    font-size: 1.87rem;
    margin-left: 0.05rem;
  }

  button {
    border: 0;
    font-size: 0.87rem;
    font-weight: 700;
    background: var(--product-title-and-button-color);
    padding: 0.5rem 1.75rem;
    border-radius: 26px;
    color: var(--white);
    margin: 3.75rem auto 5.06rem;
    display: flex;
    outline: 0;
    transition: background-color 0.2s;
  }

  button:hover {
    background: ${darken(0.1, '#D6613E')};
  }
`;

export const Ident = styled.div`
  height: 0.16rem;
  width: 6.07rem;
  background: var(--product-title-and-button-color);
  margin-top: 1.19rem;
  margin-bottom: 4.07rem;
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3.12rem 2.68rem;
  > div {
    cursor: pointer;
    background: var(--white);
    min-height: 28rem;
    position: relative;
    img {
      width: 100%;
      max-height: 19.12rem;
    }
    h5 {
      color: var(--product-title-and-button-color);
      margin: 1.19rem 1.62rem 0;
      font-weight: 700;
      font-size: 1.12rem;
      line-height: 1.5rem;
    }
    p {
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      margin: 0 1.62rem;
      font-size: 1.13rem;
      position: absolute;
      bottom: 1.62rem;
    }
  }
`;
