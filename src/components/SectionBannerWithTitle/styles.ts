import styled from 'styled-components';

import sectionBanner from '../../assets/sectionBanner.png';

export const SectionBanner = styled.section`
  background: url(${sectionBanner}) no-repeat;
  background-size: cover;
  min-height: 27.94rem;
  height: calc(100vh - 9.44rem);
  display: flex;
  align-items: center;

  div {
    margin: 0 8.125rem;
    max-width: 16.57rem;

    h1 {
      color: var(--white);
      font-size: 2.5rem;
      line-height: 3.13rem;
    }

    button {
      box-sizing: border-box;
      background-color: transparent;
      border: 1px solid var(--product-title-and-button-color);
      text-align: center;
      padding: 0.5rem 3.15rem;
      border-radius: 26px;
      color: var(--white);
      font-weight: 700;
      background-color: transparent;
      line-height: 1.19rem;
      margin-top: 2.07rem;

      &:hover,
      &:focus {
        outline: 0;
        border: 1px solid var(--product-title-and-button-color);
      }
    }
  }
  .btn {
    box-shadow: 0 0 40px 40px var(--product-title-and-button-color) inset,
      0 0 0 0 var(--product-title-and-button-color);
    transition: all 300ms ease-in-out;

    &:hover {
      box-shadow: 0 0 10px 0 var(--product-title-and-button-color) inset,
        0 0 10px 4px var(--product-title-and-button-color);
    }
  }
`;
