import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    text-align: center;
    width: 10rem;
    background: #c53030;
    padding: 8px;
    border-radius: 4px;
    font-size: 0.87rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: var(--white);
    font-weight: 700;

    &::before {
      content: '';
      border-style: solid;
      border-color: #c53030 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
