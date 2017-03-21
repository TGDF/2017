import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';

const Banner = ({ t }) => (
  <section id="banner">
    <header>
      <h2>{t('home.cfp.call_for_paper')}</h2>
      <p>{t('home.cfp.location')}</p>
      <p>{t('home.cfp.date')}</p>
      <div className="cfp__button">
        <a className="button" href="http://igda-tw.kktix.cc/events/tgdf2017-cfp">{t('home.cfp.submit')}</a>
      </div>
    </header>
  </section>
);

Banner.propTypes = {
  t: React.PropTypes.func.isRequired,
};

export default translate()(Banner);
