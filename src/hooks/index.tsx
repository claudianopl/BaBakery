import React from 'react';

import { CartProvider } from './cart';
import { ModalProvider } from './modalData';

const AppProvider: React.FC = ({ children }) => (
  <CartProvider>
    <ModalProvider>{children}</ModalProvider>
  </CartProvider>
);

export default AppProvider;
