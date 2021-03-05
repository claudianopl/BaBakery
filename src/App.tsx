import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyles from './styles/global';

import ModalProvider from './hooks/modalData';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Router>
      <ModalProvider>
        <Routes />
      </ModalProvider>
    </Router>
  </>
);

export default App;
