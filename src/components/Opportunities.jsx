import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';

const Opportunities = ({ t }) => (
  // TODO: add featured image <a href="" className="image featured"><img src="" alt="" /></a>
  <section id="opportunities" className="container">
    <Helmet>
      <title>{`${t('nav.opportunities')} | ${t('site_name')}`}</title>
      <meta name="og:url" content="https://2017.tgdf.tw/opportunities" />
      <meta name="og:title" content={`${t('nav.opportunities')} | ${t('site_name')}`} />
      <meta name="og:description" content={t('home.cfp.introduce')} />
      <meta name="og:image" content="https://2017.tgdf.tw/static/tgdf.png" />
    </Helmet>
    <article className="box post">
      <header>
        <h2>{t('nav.opportunities')}</h2>
      </header>
      <p>{t('opportunities.introduce')}</p>
      <section>
        <header>
          <h3>{t('opportunities.title.review2016')}</h3>
        </header>
        <div dangerouslySetInnerHTML={{ __html: t('opportunities.review2016') }} />
      </section>
      <p>{t('opportunities.notice')}</p>
    </article>
  </section>
);

Opportunities.propTypes = {
  t: React.PropTypes.func.isRequired,
};

export default translate()(Opportunities);
