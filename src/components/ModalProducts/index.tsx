/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback, useContext, useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { BiPlus, BiMinus } from 'react-icons/bi';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import { ModalContext } from '../../hooks/modalData';

import {
  Overlay,
  Container,
  QuantityAndAddCar,
  ActionButton,
  DescriptionProducts,
  ButtonForBuyProducts,
  CloseModal,
} from './styles';
import formatValue from '../../utils/formatValue';

const ModalProducts: React.FC = () => {
  /**
   * data modal
   */
  const { modalData, openOrCloseModal, productsId } = useContext(ModalContext);

  const product = modalData(productsId);

  const closeModalToTheUser = useCallback(() => {
    openOrCloseModal();
  }, [openOrCloseModal]);

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
          <div data-src={product?.image} />
          <div data-src={product?.image} />
          <div data-src={product?.image} />
        </AwesomeSlider>

        <DescriptionProducts>
          <h4>{product?.title}</h4>
          <p className="price">{formatValue(product?.price)}</p>
          <p className="description">{product?.description}</p>

          <QuantityAndAddCar>
            <ActionButton type="button" onClick={quantityIncremet}>
              <BiPlus size={20} color="#646464" />
            </ActionButton>
            <p>{Number(quantityProducts)}</p>
            <ActionButton type="button" onClick={quantityDecrement}>
              <BiMinus size={20} color="#646464" />
            </ActionButton>

            <ButtonForBuyProducts type="button">
              Adicionar ao carrinho
            </ButtonForBuyProducts>

            <CloseModal onClick={closeModalToTheUser}>
              <RiCloseFill color="#d6613e" size={21} />
            </CloseModal>
          </QuantityAndAddCar>
        </DescriptionProducts>
      </Container>
    </Overlay>
  );
};

export default ModalProducts;
