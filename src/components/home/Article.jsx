import React from 'react';
import {
  Link,
} from 'react-router-dom';

import 'react-dom';
import { translate } from 'react-i18next';

const ArticleItem = ({ t, post }) => (
  <div className="4u 12u(mobile)">
    <section className="box">
      <Link to={`/article/${post.id}`} className="image featured">
        <img src={post.thumbnail} alt={post.title} />
      </Link>
      <header><h3>{post.title}</h3></header>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      <footer>
        <Link to={`/article/${post.id}`} className="button alt">{t('find_more')}</Link>
      </footer>
    </section>
  </div>
);

ArticleItem.propTypes = {
  post: React.PropTypes.shape({}).isRequired,
  t: React.PropTypes.func.isRequired,
};

const items = (group, t) => group.map(item => <ArticleItem t={t} post={item} key={item.id} />);

const ArticleSection = ({ t, posts }) => {
  const rows = posts.groupBy((_, key) => Math.floor(key / 3))
                    .map(group => <div className="row" key={group}>{items(group, t)}</div>);
  return (
    <section>
      <header className="major">
        <h2>{t('home.news')}</h2>
      </header>
      {rows}
    </section>
  );
};

ArticleSection.propTypes = {
  posts: React.PropTypes.shape({}).isRequired,
  t: React.PropTypes.func.isRequired,
};

export default translate()(ArticleSection);
