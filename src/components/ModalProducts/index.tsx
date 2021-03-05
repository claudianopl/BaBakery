/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback, useState } from 'react';
import { RiSubtractLine, RiCloseFill } from 'react-icons/ri';
import { BsPlus } from 'react-icons/bs';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import fatiaDeTorataGeladaDeCafeComChocolateAmargo from '../../assets/fatiaDeTorataGeladaDeCafeComChocolateAmargo.png';

import {
  Overlay,
  Container,
  QuantityAndAddCar,
  ActionButton,
  DescriptionProducts,
  ButtonForBuyProducts,
  CloseModal,
} from './styles';

const ModalProducts: React.FC = () => {
  /**
   * Product Quantity
   */
  const [quantityProducts, setQuantityProducts] = useState(1);

  const quantityIncremet = useCallback(() => {
    setQuantityProducts(quantityProducts + 1);
  }, [quantityProducts]);

  const quantityDecrement = useCallback(() => {
    if (quantityProducts > 0) {
      setQuantityProducts(quantityProducts - 1);
    }
  }, [quantityProducts]);

  return (
    <Overlay>
      <Container>
        <AwesomeSlider className="ProductsImage" organicArrows={false}>
          <div data-src={fatiaDeTorataGeladaDeCafeComChocolateAmargo} />
          <div data-src={fatiaDeTorataGeladaDeCafeComChocolateAmargo} />
          <div data-src={fatiaDeTorataGeladaDeCafeComChocolateAmargo} />
        </AwesomeSlider>

        <DescriptionProducts>
          <h4>Tortilette de Laranja Lima com Amoras</h4>
          <p className="price">R$12,00</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adip elit, sed do tempor
            incididun ut labore et dolore magna aliqua. Ut enim ad mi , quis
            nostrud veniam exercitation.
          </p>

          <QuantityAndAddCar>
            <ActionButton type="button" onClick={quantityIncremet}>
              <BsPlus size={20} color="#646464" />
            </ActionButton>
            <p>{Number(quantityProducts)}</p>
            <ActionButton type="button" onClick={quantityDecrement}>
              <RiSubtractLine size={20} color="#646464" />
            </ActionButton>

            <ButtonForBuyProducts type="button">
              Adicionar ao carrinho
            </ButtonForBuyProducts>

            <CloseModal>
              <RiCloseFill color="#d6613e" size={21} />
            </CloseModal>
          </QuantityAndAddCar>
        </DescriptionProducts>
      </Container>
    </Overlay>
  );
};

export default ModalProducts;
