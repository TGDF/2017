import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';

import Container from '../containers/HomeContainer';

const Home = ({ t }) => (
  <section className="hero-image cfp">
    <Helmet title={t('site_name')} />
    <div className="content">
      <section className="cfp__introduce">
        {t('home.cfp.introduce')}
        <aside className="cfp__information">
          <p className="cfp__date">{t('home.cfp.date')}</p>
          <p className="cfp__location">{t('home.cfp.location')}</p>
          <p className="cfp__button">
            <a className="btn btn-outline-success" href="http://igda-tw.kktix.cc/events/tgdf2017-cfp">{t('home.cfp.call_for_paper')}</a>
          </p>
        </aside>
      </section>
    </div>
  </section>
);

Home.propTypes = {
  t: React.PropTypes.func.isRequired,
  // TODO: posts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default translate()(Container(Home));
