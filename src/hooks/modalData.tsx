import React, { createContext, useCallback, useEffect, useState } from 'react';
import api from '../service/api';

interface IProducts {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number | any;
}

interface IModalContext {
  products: IProducts[];
  productsId: string;
  isProductsModalOpen: boolean;
  setId(id: string): void;
  modalData(id: string): IProducts | undefined;
  openOrCloseModal(): void;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

const ModalProvider: React.FC = ({ children }) => {
  /**
   * Redeeming our API data
   */
  const [products, setProducts] = useState<IProducts[]>([]);
  const [productsId, setProductsId] = useState('');
  const [isProductsModalOpen, setIsProductsModalOpen] = useState(false);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  const modalData = useCallback(
    (id: string) => {
      const productData = products.find((product) => product.id === id);

      return productData;
    },
    [products],
  );

  const setId = useCallback((id) => {
    setProductsId(id);
  }, []);

  const openOrCloseModal = useCallback(() => {
    !isProductsModalOpen
      ? setIsProductsModalOpen(true)
      : setIsProductsModalOpen(false);
  }, [isProductsModalOpen]);

  return (
    <ModalContext.Provider
      value={{
        products,
        modalData,
        setId,
        openOrCloseModal,
        isProductsModalOpen,
        productsId,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
