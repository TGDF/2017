import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';

import i18n from '../i18n';

const isEnglish = () => i18n.language === 'en';
const ChangeLanguage = () => {
  if (isEnglish()) {
    i18n.changeLanguage('zh-TW');
  } else {
    i18n.changeLanguage('en');
  }
};

const NavigationLanguageSwitcher = ({ t }) => (
  <li className="nav-item">
    <a href="#switch-language" onClick={ChangeLanguage} className="nav-link">{t(isEnglish() ? 'chinese' : 'english')}</a>
  </li>
);

NavigationLanguageSwitcher.propTypes = {
  t: React.PropTypes.func.isRequired,
};

export default translate()(NavigationLanguageSwitcher);
