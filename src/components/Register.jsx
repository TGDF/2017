import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';

const Register = ({ t }) => (
  <section id="register" className="container">
    <Helmet>
      <title>{`${t('nav.register')} | ${t('site_name')}`}</title>
      <meta property="og:url" content="https://2017.tgdf.tw/register" />
      <meta property="og:title" content={`${t('nav.register')} | ${t('site_name')}`} />
      <meta property="og:description" content={t('home.cfp.introduce')} />
      <meta property="og:image" content="https://2017.tgdf.tw/static/tgdf.png" />
    </Helmet>
    <article className="box post register__description">
      <div dangerouslySetInnerHTML={{ __html: t('register.description') }} />
      <h3>{t('register.notice')}</h3>
      <ul>
        {t('register.notices', { returnObjects: true }).map(notice => <li>{notice}</li>)}
      </ul>
    </article>
  </section>
);

Register.propTypes = {
  t: React.PropTypes.func.isRequired,
};

export default translate()(Register);
