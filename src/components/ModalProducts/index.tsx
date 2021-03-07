/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback, useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { BiPlus, BiMinus } from 'react-icons/bi';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { motion } from 'framer-motion';

import { useModal } from '../../hooks/modalData';

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
import { useCart } from '../../hooks/cart';

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
}

const ModalProducts: React.FC = () => {
  /**
   * data modal
   */
  const { modalData, openOrCloseModal, productsId } = useModal();

  const product = modalData(productsId);

  /**
   * Product Quantity
   */
  const [quantityProducts, setQuantityProducts] = useState(1);

  const quantityIncremet = useCallback(() => {
    setQuantityProducts(quantityProducts + 1);
  }, [quantityProducts]);

  const quantityDecrement = useCallback(() => {
    if (quantityProducts > 1) {
      setQuantityProducts(quantityProducts - 1);
    }
  }, [quantityProducts]);

  /**
   * Adiconando produto no carrinho
   */
  const { addToCart } = useCart();
  const handleAddToCart = useCallback(
    (item: Product) => {
      addToCart(item, quantityProducts);
      openOrCloseModal();
    },
    [addToCart, quantityProducts, openOrCloseModal],
  );

  /**
   * Aniomation
   */
  const fade = {
    hidden: {
      opacity: 0,
      x: 0,
      y: -100,
      scale: 0,
      rotate: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.3 },
    },
  };

  const fadeExit = {
    opacity: 0,
    x: 0,
    y: -100,
    scale: 0,
    rotate: 0,
    transition: { duration: 0.3 },
  };

  return (
    <Overlay>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fade}
        exit={fadeExit}
      >
        <Container>
          <AwesomeSlider className="ProductsImage" organicArrows={false}>
            <div data-src={product.image} />
            <div data-src={product.image} />
            <div data-src={product.image} />
          </AwesomeSlider>

          <DescriptionProducts>
            <h4>{product?.title}</h4>
            <p className="price">{formatValue(product.price)}</p>
            <p className="description">{product.description}</p>

            <QuantityAndAddCar>
              <ActionButton type="button" onClick={quantityIncremet}>
                <BiPlus size={20} color="#646464" />
              </ActionButton>
              <p>{Number(quantityProducts)}</p>
              <ActionButton type="button" onClick={quantityDecrement}>
                <BiMinus size={20} color="#646464" />
              </ActionButton>

              <ButtonForBuyProducts
                type="button"
                onClick={() => handleAddToCart(product)}
              >
                Adicionar ao carrinho
              </ButtonForBuyProducts>

              <CloseModal onClick={openOrCloseModal}>
                <RiCloseFill color="#d6613e" size={21} />
              </CloseModal>
            </QuantityAndAddCar>
          </DescriptionProducts>
        </Container>
      </motion.div>
    </Overlay>
  );
};

export default ModalProducts;
