import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';

import Container from '../containers/ArticleContainer';

const strip = html => html.replace(/<\/?[^>]+(>|$)/g, '').replace("\n", ''); // eslint-disable-line

const Article = ({ t, title, hero, content, location }) => (
  <section className="container">
    <Helmet>
      <title>{`${title} | ${t('site_name')}`}</title>
      <meta name="og:url" content={`https://2017.tgdf.tw${location.pathname}`} />
      <meta name="og:title" content={`${title} | ${t('site_name')}`} />
      <meta name="og:description" content={strip(content)} />
      <meta name="og:image" content={hero} />
    </Helmet>
    <article className="box post">
      <a href="" className="image featured"><img src={hero} alt={title} /></a>
      <header>
        <h2>{title}</h2>
      </header>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  </section>
);

Article.propTypes = {
  title: React.PropTypes.string.isRequired,
  hero: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  t: React.PropTypes.func.isRequired,
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string,
  }).isRequired,
};

export default translate()(Container(Article));
