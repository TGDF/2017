import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const loadLocales = (url, options, callback) => {
  try {
    const waitForLocale = require(`bundle-loader!./locales/${url}.json`); // eslint-disable-line import/no-dynamic-require, global-require
    console.log(waitForLocale, url, options); // eslint-disable-line no-console
    waitForLocale((locale) => {
      console.log(locale); // eslint-disable-line no-console
      callback(locale, { status: '200' });
    });
  } catch (e) {
    callback(null, { status: '404' });
  }
};

i18n
    .use(XHR)
    .use(LanguageDetector)
    .init({
      fallbackLng: 'en',

      debug: process.env.NODE_ENV !== 'production',

      interpolation: {
        formatSeparator: ',',
        format: (value, format) => {
          if (format === 'uppercase') return value.toUpperCase();
          return value;
        },
      },
      backend: {
        loadPath: '{{lng}}',
        parse: data => data,
        ajax: loadLocales,
      },
    });


export default i18n;
