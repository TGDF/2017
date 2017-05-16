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

const DEFAULT_META = '<meta data-react-helmet="true" name="og:url" content="https://2017.tgdf.tw/"/><meta data-react-helmet="true" name="og:title" content="台北遊戲開發者論壇"/><meta data-react-helmet="true" name="og:description" content="2017 年即將邁入第六屆的台北遊戲開發者論壇（TGDF，Taipei Game Developers Forum），為台灣最大型之年度專業遊戲開發論壇，每年吸引近千名海內外開發者共襄盛舉，主辦單位除了每年邀請明星級海外講師如「洛克人之父」稻船敬二、「紀念碑谷」製作人、Valve 原廠講師等，亦有大量海內外深度遊戲設計、程式、美術專題講座。去年 TGDF 更加開 VR 體驗區、「TGDF Indie Space」遊戲作品展示區、以及商談媒合區等多元形式，希望打造台灣一年一度，全方位的遊戲開發盛宴！"/><meta data-react-helmet="true" name="og:image" content="https://2017.tgdf.tw/static/tgdf.png"/>';
const TEMPLATE = readFileSync(__dirname + '/../../public/index.html').toString();

const app = new Express();
const port = process.env.PORT || 3000;
const context = {};

function handleRender(req, res) {
  // TODO: Request to API and fetch web page information
  const store = configureStore(fromJS({}));

  const callback = () => {
    const lang = req.acceptsLanguages('zh-TW', 'en');
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
    let meta = head ? head.meta.toString() : DEFAULT_META;
    if (meta.length == 0) { meta = DEFAULT_META; }
    const finalState = store.getState();
    res.send(renderFullPage(html, title, meta, finalState));
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

function renderFullPage(html, title, meta,  preloadedState) {
  return TEMPLATE.replace('__HTML__', html)
                 .replace('__TITLE__', title)
                 .replace('__META__', meta.replace(/ data-react-helmet="true"/g, ''));
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
