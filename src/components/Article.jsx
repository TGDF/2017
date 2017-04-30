import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';

import Container from '../containers/ArticleContainer';

const Article = ({ title, hero, content }) => (
  <section className="container">
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
};

export default translate()(Container(Article));
