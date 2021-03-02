import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  :root {
    --background: #EFEFEF;
    --header: #BFB5A2;
    --header-line: #D6CEBF;
    --white: #FFFFFF;
    --titles-to-navigations: #303030;
    --product-title-and-button-color: #D6613E;
    --text: #646464;
    --copyright: #5B5B5B;
    --form-border-and-footer-line: #C8C8C8;
    --title-input-placeholder-and-contact: #858585;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
  }

  body, input, textarea, button {
    font: 400 0.875rem 'Noto Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
