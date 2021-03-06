import styled from 'styled-components';

import { lighten, darken } from 'polished';

export const Container = styled.div`
  height: 8.125rem;
  max-width: 62.75rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;

  // Medium devices (tablets with 768px or more)
  @media (min-width: 768px) and (max-width: 991.98px) {
    max-width: none;
    margin: 0 10%;
    display: flex;
  }

  // Small devices (landscape phones, 576px or more)
  @media (min-width: 576px) and (max-width: 767.98px) {
    max-width: none;
    margin: 0 12%;
    display: flex;
    height: 6.125rem;
  }

  // Extra small devices (portrait phones, under 576px)
  @media (max-width: 575.98px) {
    max-width: none;
    margin: 0 15%;
    display: flex;
    height: 5.125rem;
  }
`;

export const NavWeb = styled.nav`
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

    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;

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
  // Medium devices (tablets with 768px or more)
  @media (min-width: 768px) and (max-width: 991.98px) {
    display: none;
  }

  // Small devices (landscape phones, 576px or more)
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: none;
  }

  // Extra small devices (portrait phones, under 576px)
  @media (max-width: 575.98px) {
    display: none;
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
  }
  // Medium devices (tablets with 768px or more)
  @media (min-width: 768px) and (max-width: 991.98px) {
    margin: 0;
    margin-left: auto;
  }

  // Small devices (landscape phones, 576px or more)
  @media (min-width: 576px) and (max-width: 767.98px) {
    margin: 0;
    margin-left: auto;
    div {
      height: 8.63rem;
      width: 9.63rem;
      svg {
        width: 8rem;
      }
    }
  }

  // Extra small devices (portrait phones, under 576px)
  @media (max-width: 575.98px) {
    margin: 0;
    margin-left: 20%;
    div {
      height: 7.63rem;
      width: 8.63rem;
      svg {
        width: 8rem;
      }
    }
  }
`;

export const SocialAndCar = styled.div`
  height: 8.13rem;
  margin-left: auto;
  display: flex;
  > div {
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

    > div {
      position: relative;
      cursor: pointer;
      outline: 0;
    }
  }
  // Medium devices (tablets with 768px or more)
  @media (min-width: 768px) and (max-width: 991.98px) {
    margin: 0;
    margin-left: 10%;
  }

  // Small devices (landscape phones, 576px or more)
  @media (min-width: 576px) and (max-width: 767.98px) {
    margin: 0;
    margin-left: 5%;
    height: 6.13rem;
  }

  // Extra small devices (portrait phones, under 576px)
  @media (max-width: 575.98px) {
    margin: 0;
    margin-left: auto;
    height: 5.13rem;
    > div {
      > a {
        display: none;
      }
      > div {
        margin-left: auto;
      }
    }
  }
`;

export const CartQuantity = styled.div`
  position: absolute;
  left: 20px;
  bottom: 5px;
  width: 1.75rem;
  height: 1.75rem;
  background: var(--product-title-and-button-color);
  color: #fff;
  border-radius: 6px;
  font-weight: 700;
  display: flex;

  p {
    margin: auto;
    font-size: 0.88rem;
    text-align: center;
  }
`;

export const CartProducts = styled.div`
  overflow: hidden;
  > div:first-child {
    border-radius: 16px;
    position: relative;
    position: absolute;
    right: -12px;
    top: 88px;
    width: 22.81rem;
    z-index: 1;
    background: #fff;
    box-shadow: 2px 4px 10px 5px rgb(0, 0, 0, 0.2);
    > div {
      position: relative;
      margin: 1.5rem 1.87rem;

      > div {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        img {
          max-width: 5rem;
          height: 6.5rem;
          margin-right: 1rem;
        }
      }
      > div:last-child {
        margin-bottom: 0;
      }

      > button {
        border: 0;
        background: var(--product-title-and-button-color);
        font-weight: 700;
        color: var(--white);
        padding: 0.43rem 5.43rem;
        border-radius: 8px;
        transition: background-color 0.2s;

        &:hover {
          background: ${darken(0.1, '#D6613E')};
        }
        &:focus {
          outline: 0;
        }
      }
    }
  }

  // Extra small devices (portrait phones, under 576px)
  @media (max-width: 575.98px) {
    > div:first-child {
      width: 19rem;
      right: -6%;
      top: 100%;
      > div {
        margin: 1rem 1rem;
        > div {
          align-items: flex-start;
        }
        > button {
          padding: 0.43rem 4.43rem;
        }
      }
    }
  }
`;

export const TriangleUp = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: -37px;
  right: -19px;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-bottom: 27px solid #fff;

  // Extra small devices (portrait phones, under 576px)
  @media (max-width: 575.98px) {
    right: 0px;
  }
`;

export const TitleProducts = styled.div`
  display: flex;
  strong {
    color: #d6613e;
    font-size: 0.87rem;
    margin-right: 0.62rem;
    width: 11.18rem;
  }
  button {
    outline: 0;
    border: 0;

    margin: auto;
    background: transparent;

    svg {
      font-size: 0;
    }
  }
  // Extra small devices (portrait phones, under 576px)
  @media (max-width: 575.98px) {
    strong {
      width: 9rem;
    }
  }
`;

export const DataProducts = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.81rem;
  > div {
    margin-right: auto;
    display: flex;
    align-items: center;
    p {
      border: 1px solid #cbcbcb;
      padding: 3px 5px;
      text-align: center;
      border-radius: 4px;
      color: #646464;
    }
  }

  p {
    font-size: 0.87rem;
    color: #646464;
  }
`;

export const ActionButton = styled.button`
  transform: translateY(3px);
  margin-right: 0.25rem;
  margin-left: 0.25rem;
  outline: 0;
  border: 0;
  background: transparent;
  button:hover {
    outline: 0;
  }
`;

export const Line = styled.div`
  margin: 1.5rem auto;
  height: 1px;
  background: #cbcbcb;
  width: 14.93rem;
`;

export const SubTotalProducts = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  strong {
    margin-right: auto;
    color: #646464;
    font-size: 0.87rem;
  }
  p {
    font-weight: 700;
    color: #646464;
    font-size: 0.87rem;
  }
`;

export const Emptycart = styled.strong`
  color: #d6613e;
  font-size: 0.87rem;
  text-align: center;
`;
