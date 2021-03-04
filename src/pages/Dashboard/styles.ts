import styled from 'styled-components';

export const SectionFormContactAndCompanyLocation = styled.section`
  margin: 0 8.125rem;
  display: flex;
`;

export const CompanyLocation = styled.div`
  margin-left: auto;
  background: var(--product-title-and-button-color);
  max-height: 28.75rem;
  max-width: 409px;
  h3 {
    font-size: 1.56rem;
    line-height: 30px;
    margin: 1.62rem 2.12rem 0.93rem 2.12rem;
    color: var(--white);
  }
  img {
    margin: 0 2.12rem 0.62rem 2.12rem;
  }
  div {
    display: flex;
    color: var(--white);
    margin: 0 2.12rem 1.25rem 2.12rem;
    svg {
      font-size: 1.3rem;
      margin-right: 8px;
    }
  }

  button {
    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
    border: 1px solid var(--white);
    border-radius: 26px;
    color: var(--white);
    display: flex;
    align-self: center;
    font-size: 0.87rem;
    font-weight: 400;
    line-height: 1;
    margin: 0 2.12rem;

    padding: 0.7rem 2.18rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    transition-delay: 1s;

    &:hover,
    &:focus {
      color: #858585;
      outline: 0;
    }
  }
  .fourth {
    border-color: var(--white);
    color: var(--white);
    background-image: -webkit-linear-gradient(
      45deg,
      var(--white) 50%,
      transparent 50%
    );
    background-image: linear-gradient(45deg, var(--white) 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    transition: background 300ms ease-in-out;
  }
  .fourth:hover {
    background-position: 0;
  }
`;

export const Footer = styled.footer`
  > p {
    font-size: 0.66rem;
    color: var(--copyright);
    margin-top: 12px;
    margin-bottom: 14px;
    text-align: center;
  }
`;
export const IdentCopy = styled.footer`
  width: 62.75rem;
  height: 1px;
  background: #c8c8c8;
  margin: auto;
  margin-top: 2.12rem;
`;

export const ContactFooter = styled.div`
  margin: 0 8.125rem;
  margin-top: 9.12rem;
  display: grid;
  grid-template-columns: 45% 1fr 1fr;

  > img:first-child {
    margin-left: auto;
    margin-right: 5.31rem;
  }

  > div {
    article {
      display: flex;
      align-items: center;
      p {
        font-size: 1rem;
        font-weight: 700;
        margin-left: 0.5rem;
      }
    }

    article:last-child {
      align-items: start;
      font-weight: 500;
      img {
        margin-top: 3px;
      }
      p {
        font-weight: 500;
      }
    }

    div {
      width: 36px;
      height: 1px;
      margin-left: 30px;
      background: #858585;
      margin: 1rem 0 0.75rem 1.13rem;
    }
  }
`;

export const BackToTheTop = styled.div`
  margin-left: auto;
  button {
    outline: 0;
    border: 0;

    margin: auto;
    background: transparent;
  }
  button:hover {
    outline: 0;
  }
`;

export const Ident = styled.div``;
