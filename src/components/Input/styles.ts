import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-left: 5.62rem;
  width: 24rem;
  border: 1px solid #c8c8c8;
  font-size: 0.875rem;
  line-height: 1.187rem;
  background-color: var(--white) !important;
  padding: 0.43rem 0.56rem 0.43rem;
  display: flex;
  align-items: center;
  color: #858585;
  input {
    font-style: italic;
    background: transparent;
    flex: 1;
    border: 0;
    outline: 0;
    color: #858585;
    font-weight: 700;

    &::placeholder {
      color: #858585;
      font-weight: 400;
    }
  }
  svg {
    margin-right: 1rem;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #d6613e;
      border-color: #d6613e;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #d6613e;
    `}

  // Medium devices (tablets with 768px or more)
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: calc(100% - 5.62rem);
  }
  // Small devices (landscape phones, 576px or more)
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: calc(100% - 6rem);
  }

  // Extra small devices (portrait phones, under 576px)
  @media (max-width: 575.98px) {
    width: calc(100% - 1.2rem);
    margin: 0;
  }
`;

export const Error = styled(Tooltip)`
  height: 1.25rem;
  margin-left: 1rem;
  svg {
    margin: 0;
  }
`;
