import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  display: flex;
  margin: 5.75rem 11.69rem 7.25rem;

  div {
    margin-right: 3.32rem;
  }

  article {
    h2 {
      font-size: 1.88rem;
      margin-left: 0.05rem;
      font-weight: 700;
      animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)
        both;
    }

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
    > div {
      height: 0.16rem;
      width: 6.07rem;
      background: var(--product-title-and-button-color);
      margin-top: 1.19rem;
      margin-bottom: 2.94rem;
    }

    p {
      max-width: 24.94rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.87rem;
    }
  }
`;
