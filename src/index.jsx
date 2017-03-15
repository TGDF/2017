import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { AppContainer } from 'react-hot-loader';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/application.scss';
import configureStore from './store/configureStore';
import i18n from './i18n';
import App from './components/App';

const initialState = window.__PRELOADED_STATE__;
const store = configureStore(fromJS(initialState));

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <AppContainer>
          <Router>
            <Component />
          </Router>
        </AppContainer>
      </I18nextProvider>
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
