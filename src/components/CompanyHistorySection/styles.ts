import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 5.75rem 11.69rem 7.25rem;
  grid-gap: 0 2.12rem;
  overflow: hidden;

  div {
    margin-right: auto;
  }

  article {
    overflow: hidden;
    h2 {
      font-size: 1.88rem;
      margin-left: 0.05rem;
      font-weight: 700;
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
