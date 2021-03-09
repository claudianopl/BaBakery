import styled from 'styled-components';

import { darken } from 'polished';

export const ContainerFormContact = styled.div`
  h2 {
    color: var(--title-input-placeholder-and-contact);
    font-size: 2.18rem;
    line-height: 2.62rem;
    max-width: 29.5rem;
    margin-bottom: 2.5rem;
  }

  button {
    border: 0;
    font-size: 0.87rem;
    font-weight: 700;
    background: var(--product-title-and-button-color);
    padding: 0.5rem 2.62rem;
    border-radius: 26px;
    color: var(--white);
    margin-left: 5.62rem;
    margin-top: 0.43rem;
    outline: 0;
    transition: background-color 0.2s;
  }

  button:hover {
    background: ${darken(0.1, '#D6613E')};
  }

  // Medium devices (tablets with 768px or more)
  @media (min-width: 768px) and (max-width: 991.98px) {
    h2 {
      max-width: none;
    }
  }
  // Small devices (landscape phones, 576px or more)
  @media (min-width: 576px) and (max-width: 767.98px) {
    h2 {
      max-width: none;
    }
  }
  // Extra small devices (portrait phones, under 576px)
  @media (max-width: 575.98px) {
    h2 {
      font-size: 2rem;
      max-width: none;
    }
    button {
      margin-left: 0;
    }
  }
`;

export const InputBlock = styled.div`
  position: relative;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  label {
    color: var(--title-input-placeholder-and-contact);
    position: absolute;
    display: block;
    text-transform: uppercase;
  }
  &:nth-child(4) {
    align-items: start;
  }
  // Extra small devices (portrait phones, under 576px)
  @media (max-width: 575.98px) {
    flex-direction: column;
    label {
      position: static;
    }
  }
`;
