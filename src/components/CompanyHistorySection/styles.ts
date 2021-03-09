import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 56.93rem;
  margin: 5.75rem auto 7.25rem;
  grid-gap: 0 3.31rem;
  overflow: hidden;

  div {
    margin-right: auto;
  }

  article {
    overflow: hidden;
    h2 {
      font-size: 1.88rem;
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
  // Medium devices (tablets with 768px or more)
  @media (min-width: 768px) and (max-width: 991.98px) {
    max-width: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4.75rem 15% 6.25rem;

    div {
      margin: 0;
      margin-bottom: 2rem;
      img {
        width: 33rem;
      }
    }
    article {
      > div {
        margin-bottom: 1.94rem;
      }
      p {
        max-width: 33rem;
      }
    }
  }

  // Small devices (landscape phones, 576px or more)
  @media (min-width: 576px) and (max-width: 767.98px) {
    max-width: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4.75rem 17% 6.25rem;

    div {
      margin: 0;
      margin-bottom: 2rem;
      img {
        width: 33rem;
      }
    }
    article {
      > div {
        margin-bottom: 1.94rem;
      }
      p {
        max-width: 33rem;
      }
    }
  }

  // Extra small devices (portrait phones, under 576px)
  @media (max-width: 575.98px) {
    max-width: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4.75rem 20% 6.25rem;

    div {
      margin: 0;
      margin-bottom: 2rem;
      img {
        display: none;
      }
    }
    article {
      > div {
        margin-bottom: 1.94rem;
      }
      p {
        max-width: none;
      }
    }
  }
`;
