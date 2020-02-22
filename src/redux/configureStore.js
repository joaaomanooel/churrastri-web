import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { fetchMiddleware } from './middlewares';

const rootPersistConfig = { key: 'root', timeout: 10000, storage };

export default (reducers, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);
  middleware.push(fetchMiddleware);
  enhancers.push(applyMiddleware(...middleware));

  const dvtConfig = { hostname: 'localhost', port: 8000 };
  const { NODE_ENV } = process.env;

  const composeEnhancers = NODE_ENV !== 'production' ? composeWithDevTools(dvtConfig) : compose;

  const rootReducer = persistReducer(rootPersistConfig, reducers);
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  const persistor = persistStore(store);

  const sagasManager = sagaMiddleware.run(rootSaga);

  return { store, persistor, sagasManager, sagaMiddleware };
};
