import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { AppContainer } from 'react-hot-loader';

import './styles/application.scss';
import configureStore from './store/configureStore';
import App from './components/App';

const initialState = window.__PRELOADED_STATE__;
const store = configureStore(fromJS(initialState));

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('app'),
  );
};

render(App);

// Not update correctly, disable it
// Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     render(App);
//   });
// }
