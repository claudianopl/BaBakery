import React, { useCallback, useEffect, useState } from 'react';

import { Container, Ident, Products } from './styles';

import ModalProducts from '../ModalProducts';
import api from '../../service/api';
import formatValue from '../../utils/formatValue';

interface IProduct {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

const ProductsSection: React.FC = () => {
  /**
   * Sending the data to the modal
   */
  const [isProductsModalOpen, setIsProductsModalOpen] = useState(false);

  /**
   * Redeeming fake API products
   */
  const [products, setProducts] = useState<IProduct[] | any>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return (
    <>
      <section>
        <Container>
          <h2>Produtos</h2>
          <Ident />

          <Products>
            {products.map((product) => (
              <div
                onClick={() => setIsProductsModalOpen(true)}
                onKeyPress={() => setIsProductsModalOpen(true)}
                role="button"
                tabIndex={0}
              >
                <img src={product.image} alt="Products" />
                <h5>{product.title}</h5>
                <p>{formatValue(product.price)}</p>
              </div>
            ))}
          </Products>

          <button type="button">Ver menos</button>
        </Container>
      </section>

      {isProductsModalOpen && <ModalProducts />}
    </>
  );
};

export default ProductsSection;
