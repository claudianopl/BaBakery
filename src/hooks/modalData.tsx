import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import Error from '../utils/getValidationErrors';
import api from '../service/api';

interface IProducts {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

interface IModalContext {
  products: IProducts[];
  productsId: string;
  isProductsModalOpen: boolean;
  setId(id: string): void;
  modalData(id: string): IProducts;
  openOrCloseModal(): void;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider: React.FC = ({ children }) => {
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

      if (!productData) {
        throw new ErrorEvent('Product not exists');
      }

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

export function useModal(): IModalContext {
  const context = useContext(ModalContext);
  if (!context) {
    throw new ErrorEvent('useAuth must be used whithin an AuthContext');
  }

  return context;
}
