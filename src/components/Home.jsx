import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';

const Home = ({ t }) => (
  <section className="hero-image cfp">
    <div className="content">
      <section className="cfp__introduce">
        {t('home.cfp.introduce')}
        <aside className="cfp__information">
          <p className="cfp__date">{t('home.cfp.date')}</p>
          <p className="cfp__location">{t('home.cfp.location')}</p>
          <p className="cfp__button">
            <a className="btn btn-warning" href="http://igda-tw.kktix.cc/events/tgdf2017-cfp">{t('home.cfp.call_for_paper')}</a>
          </p>
        </aside>
      </section>
    </div>
  </section>
);

Home.propTypes = {
  t: React.PropTypes.func.isRequired,
};

export default translate()(Home);
