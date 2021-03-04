import styled from 'styled-components';

import { darken } from 'polished';

export const ContainerFormContact = styled.div`
  h2 {
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

export const InputBlock = styled.div`
  position: relative;
  margin-bottom: 1rem;
  label {
    position: absolute;
    display: block;
    text-transform: uppercase;
  }
`;
