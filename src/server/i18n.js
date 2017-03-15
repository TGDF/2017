import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
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
      resources: {
        'zh-TW': {
            translation: require('../locales/zh-TW.json'),
        },
        en: {
            translation: require('../locales/en.json'),
        },
      },
    });


export default i18n;
