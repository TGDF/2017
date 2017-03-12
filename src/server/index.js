import Express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import configureStore from '../store/configureStore';
import App from '../components/App';

const app = new Express();
const port = process.env.PORT || 3000;

function handleRender(req, res) {
    // TODO: Request to API and fetch web page information
    const store = configureStore(fromJS({}));

    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const finalState = store.getState();

    res.send(renderFullPage(html, finalState));
}

function renderFullPage(html, preloadedState) {
  // Load bundled template instead direct write code
  return `
    <!doctype html>
    <html>
      <head>
        <title>台灣遊戲開發者論壇</title>
        <link href="style.css" rel="stylesheet">
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
    `
}

app.set('env', 'production');
app.use('/', Express.static(__dirname + '/../../public'));
app.use(handleRender);

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
});
