import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';
import { fetchMiddleware } from './middlewares';

const rootPersistConfig = { key: 'root', timeout: 10000, storage };

export default (reducers, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  // Saga
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  middleware.push(fetchMiddleware);
  // Apply Middleware
  enhancers.push(applyMiddleware(...middleware));

  // Compose
  const devtoolsConfig = { hostname: 'localhost', port: 8000 };
  // const composeEnhancers = __DEV__ ? composeWithDevTools(devtoolsConfig) : compose;
  // Store
  const rootReducer = persistReducer(rootPersistConfig, reducers);
  const store = createStore(rootReducer, compose(...enhancers));
  const persistor = persistStore(store);

  // Kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga);

  return { store, persistor, sagasManager, sagaMiddleware };
};
