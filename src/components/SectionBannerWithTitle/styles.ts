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
      animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }

    @keyframes text-focus-in {
      0% {
        -webkit-filter: blur(12px);
        filter: blur(12px);
        opacity: 0;
      }
      100% {
        -webkit-filter: blur(0px);
        filter: blur(0px);
        opacity: 1;
      }
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
      animation: bounce-left 0.8s 1s both;
      opacity: 0;

      @keyframes bounce-left {
        0% {
          -webkit-transform: translateX(-48px);
          transform: translateX(-48px);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          opacity: 0;
        }
        24% {
          opacity: 1;
        }
        40% {
          -webkit-transform: translateX(-26px);
          transform: translateX(-26px);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }
        65% {
          -webkit-transform: translateX(-13px);
          transform: translateX(-13px);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }
        82% {
          -webkit-transform: translateX(-6.5px);
          transform: translateX(-6.5px);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }
        93% {
          -webkit-transform: translateX(-4px);
          transform: translateX(-4px);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }
        25%,
        55%,
        75%,
        87%,
        98% {
          -webkit-transform: translateX(0px);
          transform: translateX(0px);
          -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
        }
        100% {
          -webkit-transform: translateX(0px);
          transform: translateX(0px);
          -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
          opacity: 1;
        }
      }

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
