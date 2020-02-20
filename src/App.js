import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import GlobalStyle from './GlobalStyle';
import createStore from './redux';
import Routes from './routes';

const { store, persistor } = createStore();

export { store };

export default () => (
  <Provider store={store}>
    <GlobalStyle />
    <PersistGate persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);
