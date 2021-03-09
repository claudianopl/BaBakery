import styled from 'styled-components';
import { motion } from 'framer-motion';

import { darken } from 'polished';

export const Container = styled.div`
  max-width: 62.75rem;
  overflow: hidden;
  margin: 0 auto;
  h2 {
    font-size: 1.87rem;
  }

  button {
    min-width: 8.68rem;
    border: 0;
    font-size: 0.87rem;
    font-weight: 700;
    background: var(--product-title-and-button-color);
    padding: 0.5rem 1.75rem;
    border-radius: 26px;
    color: var(--white);
    margin: 3.75rem auto 5.06rem;
    display: flex;
    justify-content: center;
    outline: 0;
    transition: background-color 0.2s;
  }

  button:hover {
    background: ${darken(0.1, '#D6613E')};
  }

  // Medium devices (tablets with 768px or more)
  @media (min-width: 768px) and (max-width: 991.98px) {
    max-width: none;
    margin: 0 10%;
  }
  // Small devices (landscape phones, 576px or more)
  @media (min-width: 576px) and (max-width: 767.98px) {
    max-width: none;
    margin: 0 12%;

    button {
      margin: 1.75rem auto 5.06rem;
    }
  }
  // Extra small devices (portrait phones, under 576px)
  @media (max-width: 575.98px) {
    max-width: none;
    margin: 0 15%;

    button {
      margin: 1.75rem auto 5.06rem;
    }
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
  overflow: hidden;
  // Medium devices (tablets with 768px or more)
  @media (min-width: 768px) and (max-width: 991.98px) {
    grid-gap: 3.12rem 1rem;
  }
  // Small devices (landscape phones, 576px or more)
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: block;
  }
  // Extra small devices (portrait phones, under 576px)
  @media (max-width: 575.98px) {
    display: block;
  }
`;

export const FirstProducts = styled.div`
  outline: 0;
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
  // Medium devices (tablets with 768px or more)
  @media (min-width: 768px) and (max-width: 991.98px) {
    min-height: 25rem;
  }
  // Small devices (landscape phones, 576px or more)
  @media (min-width: 576px) and (max-width: 767.98px) {
    max-width: 19.12rem;
    margin: auto;
    margin-bottom: 3.12rem;
  }
  // Extra small devices (portrait phones, under 576px)
  @media (max-width: 575.98px) {
    max-width: 19.12rem;
    margin: auto;
    margin-bottom: 3.12rem;
  }
`;

export const ProductsAppearOnClick = styled(motion.div)`
  outline: 0;
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
  // Small devices (landscape phones, 576px or more)
  @media (min-width: 576px) and (max-width: 767.98px) {
    max-width: 19.12rem;
    margin: auto;
    margin-bottom: 3.12rem;
  }
  // Extra small devices (portrait phones, under 576px)
  @media (max-width: 575.98px) {
    max-width: 19.12rem;
    margin: auto;
    margin-bottom: 3.12rem;
  }
`;
