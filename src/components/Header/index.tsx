import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { NavLink } from 'react-router-dom';
import { BiPlus, BiMinus } from 'react-icons/bi';
import logo from '../../assets/logo.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';
import shoppingCart from '../../assets/icons/shoppingCart.svg';
import fatiaDeTorataGeladaDeCafeComChocolateAmargo from '../../assets/fatiaDeTorataGeladaDeCafeComChocolateAmargo@2x.png';

import {
  Container,
  Logo,
  SocialAndCar,
  CartProducts,
  TitleProducts,
  DataProducts,
  ActionButton,
  TriangleUp,
  Line,
  SubTotalProducts,
} from './styles';

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
        <CartProducts>
          <div>
            <TriangleUp />
            <div>
              <img
                src={fatiaDeTorataGeladaDeCafeComChocolateAmargo}
                alt="Product"
              />
              <div>
                <TitleProducts>
                  <strong>Cupcake de Morango Glaceado</strong>
                  <button type="button">
                    <FiTrash2 size={20} color="646464" />
                  </button>
                </TitleProducts>
                <DataProducts>
                  <div>
                    <ActionButton type="button">
                      <BiPlus size={20} color="#646464" />
                    </ActionButton>
                    <p>01</p>
                    <ActionButton type="button">
                      <BiMinus size={20} color="#646464" />
                    </ActionButton>
                  </div>
                  <p>R$17,00</p>
                </DataProducts>
              </div>
            </div>

            <div>
              <img
                src={fatiaDeTorataGeladaDeCafeComChocolateAmargo}
                alt="Product"
              />
              <div>
                <TitleProducts>
                  <strong>Cupcake de Morango Glaceado</strong>
                  <button type="button">
                    <FiTrash2 size={20} color="646464" />
                  </button>
                </TitleProducts>
                <DataProducts>
                  <div>
                    <ActionButton type="button">
                      <BiPlus size={20} color="#646464" />
                    </ActionButton>
                    <p>01</p>
                    <ActionButton type="button">
                      <BiMinus size={20} color="#646464" />
                    </ActionButton>
                  </div>
                  <p>R$17,00</p>
                </DataProducts>
              </div>
            </div>
            <Line />
            <SubTotalProducts>
              <strong>Subtotal (sem frete):</strong>
              <p>R$34,00</p>
            </SubTotalProducts>
            <button type="button">Finaliza Compra</button>
          </div>
        </CartProducts>
      </Container>
      <div style={{ background: 'var(--header-line)', height: '21px' }} />
    </header>
  );
};

export default Header;
