import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import formatValue from '../utils/formatValue';

interface IProduct {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  products: IProduct[];
  addToCart(item: Omit<IProduct, 'quantity'>, quantity: number): void;
  increment(id: string): void;
  decrement(id: string): void;
  removeItemFromCart(id: string): void;
  priceTotalProducts(): string;
  totalItensProducts(): number;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    function loadProducts(): void {
      const storageProducts = localStorage.getItem('@BaBakery:products');

      if (storageProducts) {
        setProducts([...JSON.parse(storageProducts)]);
      }
    }
    loadProducts();
  }, []);

  const addToCart = useCallback(
    (product: IProduct, quantity: number) => {
      let newProducts: IProduct[] | any = [];

      const productsExists = products.find((p) => p.id === product.id);

      if (productsExists) {
        newProducts = products.map((p) =>
          p.id === product.id
            ? { ...product, quantity: p.quantity + quantity }
            : p,
        );
      } else {
        newProducts = [...products, { ...product, quantity }];
      }

      setProducts(newProducts);
      localStorage.setItem('@BaBakery:products', JSON.stringify(newProducts));
    },
    [products],
  );

  const increment = useCallback(
    (id) => {
      const productToChange = products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );

      setProducts(productToChange);

      localStorage.setItem(
        '@BaBakery:products',
        JSON.stringify(productToChange),
      );
    },
    [products],
  );

  const decrement = useCallback(
    (id) => {
      const filterAllProductsExceptTheChange = products.filter(
        (product) => product.id !== id,
      );

      const productToChange = products.find((product) => product.id === id);

      let newProducts: IProduct[] | any = [];

      if (productToChange) {
        if (productToChange.quantity <= 1) {
          newProducts = [...filterAllProductsExceptTheChange];
        } else {
          const productsToChange = products.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity - 1 }
              : product,
          );

          newProducts = productsToChange;
        }
      }

      setProducts(newProducts);
      localStorage.setItem('@BaBakery:products', JSON.stringify(newProducts));
    },
    [products],
  );

  const removeItemFromCart = useCallback(
    (id) => {
      const filterAllProductsExceptTheChange = products.filter(
        (product) => product.id !== id,
      );

      setProducts(filterAllProductsExceptTheChange);

      localStorage.setItem(
        '@BaBakery:products',
        JSON.stringify(filterAllProductsExceptTheChange),
      );
    },
    [products],
  );

  const priceTotalProducts = useCallback(() => {
    const total = products.reduce((accumulator, product) => {
      const productSubTotal = product.price * product.quantity;

      return accumulator + productSubTotal;
    }, 0);

    return formatValue(total);
  }, [products]);

  const totalItensProducts = useCallback(() => {
    const total = products.reduce((accumulator, product) => {
      return accumulator + product.quantity;
    }, 0);

    return total;
  }, [products]);

  const value = React.useMemo(
    () => ({
      addToCart,
      increment,
      decrement,
      products,
      removeItemFromCart,
      priceTotalProducts,
      totalItensProducts,
    }),
    [
      products,
      addToCart,
      increment,
      decrement,
      removeItemFromCart,
      priceTotalProducts,
      totalItensProducts,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export function useCart(): CartContextProps {
  const context = useContext(CartContext);
  if (!context) {
    throw new ErrorEvent('useAuth must be used whithin an AuthContext');
  }

  return context;
}
