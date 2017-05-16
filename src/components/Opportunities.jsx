import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';
import Slider from 'react-slick';

const Opportunities = ({ t }) => (
  // TODO: add featured image <a href="" className="image featured"><img src="" alt="" /></a>
  <section id="opportunities" className="container">
    <Helmet>
      <title>{`${t('nav.opportunities')} | ${t('site_name')}`}</title>
      <meta property="og:url" content="https://2017.tgdf.tw/opportunities" />
      <meta property="og:title" content={`${t('nav.opportunities')} | ${t('site_name')}`} />
      <meta property="og:description" content={t('home.cfp.introduce')} />
      <meta property="og:image" content="https://2017.tgdf.tw/static/tgdf.png" />
    </Helmet>
    <article className="box post ">
      <Slider className="image featured opportunities__slider" autoplay arrows={false} dots={false} pauseOnHover={false}>
        <div><div className="slider slider1" /></div>
        <div><div className="slider slider2" /></div>
      </Slider>
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
