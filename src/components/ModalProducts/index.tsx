/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback, useState } from 'react';
import { RiSubtractLine } from 'react-icons/ri';
import { BsPlus } from 'react-icons/bs';

import fatiaDeTorataGeladaDeCafeComChocolateAmargo from '../../assets/fatiaDeTorataGeladaDeCafeComChocolateAmargo.png';

import {
  Overlay,
  Container,
  QuantityAndAddCar,
  ActionButton,
  ImagesArea,
  DescriptionProducts,
  ButtonForBuyProducts,
} from './styles';

const ModalProducts: React.FC = () => {
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
        <ImagesArea>
          <img
            src={fatiaDeTorataGeladaDeCafeComChocolateAmargo}
            alt="Fatia de bolo"
          />
          <div>
            <img
              src={fatiaDeTorataGeladaDeCafeComChocolateAmargo}
              alt="Fatia de bolo"
            />

            <img
              src={fatiaDeTorataGeladaDeCafeComChocolateAmargo}
              alt="Fatia de bolo"
            />

            <img
              src={fatiaDeTorataGeladaDeCafeComChocolateAmargo}
              alt="Fatia de bolo"
            />
          </div>
        </ImagesArea>
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

            <ButtonForBuyProducts>Adicionar ao carrinho</ButtonForBuyProducts>
          </QuantityAndAddCar>
        </DescriptionProducts>
      </Container>
    </Overlay>
  );
};

export default ModalProducts;
