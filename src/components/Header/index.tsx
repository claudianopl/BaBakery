import React from 'react';

import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';
import shoppingCart from '../../assets/icons/shoppingCart.svg';

import { Container, Logo, SocialAndCar } from './styles';

const Header: React.FC = () => {
  return (
    <header style={{ background: 'var(--header)' }}>
      <Container>
        <nav>
          <NavLink to="#">Quem Somos</NavLink>
          <NavLink to="#">EQUIPE</NavLink>
          <NavLink to="#">CONTATO</NavLink>
        </nav>

        <Logo>
          <a href="#">
            <div>
              <img src={logo} alt="Ba Bakery" />
            </div>
          </a>
        </Logo>

        <SocialAndCar>
          <div>
            <a href="#">
              <img src={facebook} alt="iconFacebook" />
            </a>
            <a href="#">
              <img src={instagram} alt="iconInstagram" />
            </a>
            <a href="#">
              <img src={twitter} alt="iconTwitter" />
            </a>
            <div>
              <img src={shoppingCart} alt="iconCart" />
              <div>
                <p>02</p>
              </div>
            </div>
          </div>
        </SocialAndCar>
      </Container>
      <div style={{ background: 'var(--header-line)', height: '21px' }} />
    </header>
  );
};

export default Header;
