import WPAPI from 'wpapi';

import i18n from './i18n';

const isEnglish = () => i18n.language !== 'zh-TW';

const ZH_ENDPOINT = process.env.ZH_ENDPOINT || 'https://2017.tgdf.tw/wp-json';
const EN_ENDPOINT = process.env.EN_ENDPOINT || 'https://2017.tgdf.tw/wp-json'; // TODO: Provide English site
const API_INSTANCE = {};

const setupAPI = (_API) => {
  const API = _API;
  API.sponsors = API.registerRoute('wp/v2', '/sponsors/(?P<id>\\d+)');
  API.sponsorLevels = API.registerRoute('wp/v2', '/sponsor_level/(?P<id>\\d+)');
  API.speakers = API.registerRoute('wp/v2', '/speakers/(?P<id>\\d+)');
  API.sessions = API.registerRoute('wp/v2', '/sessions/(?P<id>\\d+)');
  API.session_room = API.registerRoute('wp/v2', '/session_room/(?P<id>\\d+)');
  API.session_time = API.registerRoute('wp/v2', '/session_time/(?P<id>\\d+)');
  API.session_type = API.registerRoute('wp/v2', '/session_type/(?P<id>\\d+)');

  return API;
};

const API = () => {
  if (isEnglish()) {
    API_INSTANCE.en = API_INSTANCE.en || setupAPI(new WPAPI({ endpoint: EN_ENDPOINT }));
    return API_INSTANCE.en;
  }
  API_INSTANCE.zh = API_INSTANCE.zh || setupAPI(new WPAPI({ endpoint: ZH_ENDPOINT }));
  return API_INSTANCE.zh;
};

export default API;
