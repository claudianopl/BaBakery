import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-left: 90px;
  width: 24rem;
  border: 1px solid #c8c8c8;
  font-size: 0.875rem;
  line-height: 19px;
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
      border: 2px solid #d6613e;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #d6613e;
    `}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
`;
