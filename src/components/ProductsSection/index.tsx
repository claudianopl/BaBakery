/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useCallback, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import {
  Container,
  Ident,
  Products,
  FirstProducts,
  ProductsAppearOnClick,
} from './styles';

import ModalProducts from '../ModalProducts';
import formatValue from '../../utils/formatValue';
import { useModal } from '../../hooks/modalData';

const ProductsSection: React.FC = () => {
  /**
   * Using the Modal Hook
   */
  const { products, setId, openOrCloseModal, isProductsModalOpen } = useModal();

  const showModalToTheUser = useCallback(
    (id: string): void => {
      openOrCloseModal();

      setId(id);
    },
    [openOrCloseModal, setId],
  );

  /**
   * View more
   */
  const [isViewMore, setIsViewMore] = useState(false);

  const openProducts = useCallback(() => {
    isViewMore === false ? setIsViewMore(true) : setIsViewMore(false);
  }, [isViewMore]);

  /**
   * Animation
   */
  const transitionTheTop = {
    hidden: {
      y: -500,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: (i - 2) * 0.1 },
    }),
  };

  const transitionTheTopExit = {
    opacity: 0,
    y: -500,
    transition: { duration: 0.2 },
  };

  return (
    <>
      <section>
        <Container>
          <h2>Produtos</h2>
          <Ident />

          <Products>
            {products.map((product, index) => {
              if (index <= 2) {
                return (
                  <FirstProducts
                    onClick={() => showModalToTheUser(product.id)}
                    onKeyPress={() => showModalToTheUser(product.id)}
                    role="button"
                    tabIndex={0}
                  >
                    <img src={product.image} alt="Products" />
                    <h5>{product.title}</h5>
                    <p>{formatValue(product.price)}</p>
                  </FirstProducts>
                );
              }

              return (
                <AnimatePresence>
                  {isViewMore && (
                    <div style={{ overflow: 'hidden' }}>
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        custom={index}
                        variants={transitionTheTop}
                        exit={transitionTheTopExit}
                      >
                        <ProductsAppearOnClick
                          onClick={() => showModalToTheUser(product.id)}
                          onKeyPress={() => showModalToTheUser(product.id)}
                          role="button"
                          tabIndex={0}
                        >
                          <img src={product.image} alt="Products" />
                          <h5>{product.title}</h5>
                          <p>{formatValue(product.price)}</p>
                        </ProductsAppearOnClick>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              );
            })}
          </Products>

          <button type="button" onClick={openProducts}>
            {isViewMore ? 'Ver menos' : 'Ver mais'}
          </button>
        </Container>
      </section>

      <AnimatePresence>
        {isProductsModalOpen && <ModalProducts />}
      </AnimatePresence>
    </>
  );
};

export default ProductsSection;
