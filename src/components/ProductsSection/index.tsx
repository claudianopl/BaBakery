/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useCallback, useContext, useEffect, useState } from 'react';

import { Container, Ident, Products } from './styles';

import ModalProducts from '../ModalProducts';
import api from '../../service/api';
import formatValue from '../../utils/formatValue';
import { ModalContext } from '../../hooks/modalData';

interface IProduct {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

const ProductsSection: React.FC = () => {
  /**
   * Using the Modal Hook
   */
  const { products, setId, openOrCloseModal, isProductsModalOpen } = useContext(
    ModalContext,
  );

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
                  <div
                    onClick={() => showModalToTheUser(product.id)}
                    onKeyPress={() => showModalToTheUser(product.id)}
                    role="button"
                    tabIndex={0}
                  >
                    <img src={product.image} alt="Products" />
                    <h5>{product.title}</h5>
                    <p>{formatValue(product.price)}</p>
                  </div>
                );
              }

              return (
                <div
                  onClick={() => showModalToTheUser(product.id)}
                  onKeyPress={() => showModalToTheUser(product.id)}
                  role="button"
                  tabIndex={0}
                  style={
                    isViewMore ? { display: 'block' } : { display: 'none' }
                  }
                >
                  <img src={product.image} alt="Products" />
                  <h5>{product.title}</h5>
                  <p>{formatValue(product.price)}</p>
                </div>
              );
            })}
          </Products>

          <button type="button" onClick={openProducts}>
            {isViewMore ? 'Ver menos' : 'Ver mais'}
          </button>
        </Container>
      </section>

      {isProductsModalOpen && <ModalProducts />}
    </>
  );
};

export default ProductsSection;
