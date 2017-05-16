import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const middlewares = () => {
  if (process.env === 'production') {
    return applyMiddleware(thunk);
  }

  return applyMiddleware(thunk);
};

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    middlewares(),
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
