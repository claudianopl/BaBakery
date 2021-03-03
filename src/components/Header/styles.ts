import styled from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.div`
  height: 8.125rem;
  margin: 0 8.125rem;
  display: grid;
  grid-template-columns: 35% 30% 40%;

  nav {
    height: 8.125rem;
    display: flex;
    align-items: center;
    a {
      color: var(--titles-to-navigations);
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.88rem;

      & + a {
        margin-left: 1.875rem;
      }

      animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)
        both;

      @keyframes tracking-in-expand {
        0% {
          letter-spacing: -0.5em;
          opacity: 0;
        }
        40% {
          opacity: 0.6;
        }
        100% {
          opacity: 1;
        }
      }

      &:hover {
        color: ${lighten(0.2, '#303030')};
      }
    }
  }
`;

export const Logo = styled.div`
  height: 8.125rem;
  margin: auto;
  position: relative;
  div {
    z-index: 1;
    background: var(--white);
    height: 10.63rem;
    width: 11.63rem;
    border-radius: 0px 0px 4px 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      animation: slide-in-bck-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        0.3s both;
      width: 9.69rem;
      height: 6.94rem;
    }
    @keyframes slide-in-bck-center {
      0% {
        -webkit-transform: translateZ(600px);
        transform: translateZ(600px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
      }
    }
  }
`;

export const SocialAndCar = styled.div`
  height: 8.13rem;
  margin-left: auto;
  display: flex;
  div {
    display: flex;
    align-items: center;
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) 0.6s
      both;
    > a {
      margin-left: 1rem;
    }
    > a:nth-child(3) {
      margin-right: 2.63rem;
    }

    div {
      position: relative;
      cursor: pointer;

      div {
        position: absolute;
        left: 20px;
        bottom: 3px;
        width: 1.75rem;
        height: 1.75rem;
        background: var(--product-title-and-button-color);
        color: #fff;
        border-radius: 6px;
        font-weight: 700;

        p {
          margin: auto;
          font-size: 0.88rem;
        }
      }
    }
  }
`;
