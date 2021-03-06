import React, { useCallback, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { NavLink } from 'react-router-dom';
import { BiPlus, BiMinus } from 'react-icons/bi';
import logo from '../../assets/logo.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';
import shoppingCart from '../../assets/icons/shoppingCart.svg';
import fatiaDeTorataGeladaDeCafeComChocolateAmargo from '../../assets/fatiaDeTorataGeladaDeCafeComChocolateAmargo.png';

import { useCart } from '../../hooks/cart';

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
  Emptycart,
  CartQuantity,
} from './styles';
import formatValue from '../../utils/formatValue';

const Header: React.FC = () => {
  /**
   * Opening cart
   */
  const [isOpenCart, setIsOpenCart] = useState(false);

  const handleOpenCart = useCallback(() => {
    isOpenCart === false ? setIsOpenCart(true) : setIsOpenCart(false);
  }, [isOpenCart]);
  /**
   * Making the cart dynamic
   */
  const {
    products,
    increment,
    decrement,
    removeItemFromCart,
    priceTotalProducts,
    totalItensProducts,
  } = useCart();

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
            <div
              onClick={handleOpenCart}
              onKeyPress={handleOpenCart}
              role="button"
              tabIndex={0}
            >
              <img src={shoppingCart} alt="iconCart" />
              {totalItensProducts() > 0 && (
                <CartQuantity>
                  <p>{totalItensProducts()}</p>
                </CartQuantity>
              )}
            </div>
          </div>
        </SocialAndCar>
        {isOpenCart && (
          <CartProducts>
            <div>
              <TriangleUp />
              {products.length ? (
                <>
                  {products.map((product) => (
                    <div>
                      <img src={product.image} alt="Product" />
                      <div>
                        <TitleProducts>
                          <strong>{product.title}</strong>
                          <button
                            type="button"
                            onClick={() => removeItemFromCart(product.id)}
                          >
                            <FiTrash2 size={20} color="646464" />
                          </button>
                        </TitleProducts>
                        <DataProducts>
                          <div>
                            <ActionButton
                              type="button"
                              onClick={() => increment(product.id)}
                            >
                              <BiPlus size={20} color="#646464" />
                            </ActionButton>
                            <p>{product.quantity}</p>
                            <ActionButton
                              type="button"
                              onClick={() => decrement(product.id)}
                            >
                              <BiMinus size={20} color="#646464" />
                            </ActionButton>
                          </div>
                          <p>{formatValue(product.price)}</p>
                        </DataProducts>
                      </div>
                    </div>
                  ))}
                  <Line />
                  <SubTotalProducts>
                    <strong>Subtotal (sem frete):</strong>
                    <p>{priceTotalProducts()}</p>
                  </SubTotalProducts>
                  <button type="button">Finaliza Compra</button>
                </>
              ) : (
                <Emptycart>Seu carrinho está vazio</Emptycart>
              )}
            </div>
          </CartProducts>
        )}
      </Container>
      <div style={{ background: 'var(--header-line)', height: '21px' }} />
    </header>
  );
};

export default Header;
