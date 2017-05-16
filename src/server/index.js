import Express from 'express';
import { readFileSync } from 'fs';

import React from 'react';
import Helmet from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { I18nextProvider } from 'react-i18next';
import {
  StaticRouter as Router,
  Route,
} from 'react-router-dom';


import configureStore from '../store/configureStore';
import App from '../components/App';
import i18n from './i18n';

import { requestSessions } from '../actions/sessions';
import { requestSpeakers } from '../actions/speakers';
import { requestSponsorsAll } from '../actions/sponsors';
import { requestPosts } from '../actions/posts';

const TEMPLATE = readFileSync(__dirname + '/../../public/index.html').toString();

const app = new Express();
const port = process.env.PORT || 3000;
const context = {};

function handleRender(req, res) {
  // TODO: Request to API and fetch web page information
  const store = configureStore(fromJS({}));

  const callback = () => {
    const lang = req.acceptsLanguages('en', 'zh-TW');
    i18n.changeLanguage(lang);

    const html = renderToString(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Router location={req.url} context={context}>
            <App />
          </Router>
        </I18nextProvider>
      </Provider>
    );

    const head = Helmet.rewind();
    const title = head ? head.title.toString() : '<title>台北遊戲開發者論壇</title>';
    const finalState = store.getState();
    res.send(renderFullPage(html, title, finalState));
  }

  if (req.url.startsWith('/schedule')) {
    requestSessions()(store.dispatch).then(() => callback());
  } else if(req.url.startsWith('/speaker')) {
    requestSpeakers()(store.dispatch).then(() => callback());
  } else if(req.url.startsWith('/partner')) {
    requestSponsorsAll(store.dispatch).then(() => callback());
  } else if (req.url.startsWith('/article')) {
    requestPosts()(store.dispatch).then(() => callback());
  } else {
    callback();
  }
}

function renderFullPage(html, title,  preloadedState) {
  return TEMPLATE.replace('__HTML__', html)
                 .replace('__TITLE__', title);
}

app.set('env', 'production');
app.use('/static', Express.static(__dirname + '/../../public'));
app.use(handleRender);

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
});
