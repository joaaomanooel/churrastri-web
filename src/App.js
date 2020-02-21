import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import createStore from './redux';
import Routes from './routes';
import GlobalStyle from './GlobalStyle';

const { store, persistor } = createStore();

export { store };

export default () => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </>
);
