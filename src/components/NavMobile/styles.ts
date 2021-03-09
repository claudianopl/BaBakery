import styled from 'styled-components';

import { motion } from 'framer-motion';

export const NavMobile = styled(motion.nav)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 20;
  > div {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    background: #fff;
  }
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 25px;
    position: fixed;
    top: 100px;
    width: 230px;
    li {
      list-style: none;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #d6613e;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    position: fixed;
    top: 18px;
    left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 991.98px) {
    display: block;
  }
`;
