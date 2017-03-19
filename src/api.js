import WPAPI from 'wpapi';

import i18n from './i18n';

const isEnglish = () => i18n.language !== 'zh-TW';

const ZH_ENDPOINT = 'https://2017.tgdf.tw/wp-json';
const EN_ENDPOINT = 'https://2017.tgdf.tw/wp-json'; // TODO: Provide English site
const API_INSTANCE = {};

const API = () => {
  if (isEnglish()) {
    API_INSTANCE.en = API_INSTANCE.en || new WPAPI({ endpoint: EN_ENDPOINT });
    return API_INSTANCE.en;
  }
  API_INSTANCE.zh = API_INSTANCE.zh || new WPAPI({ endpoint: ZH_ENDPOINT });
  return API_INSTANCE.zh;
};

export default API;
