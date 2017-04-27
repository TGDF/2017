import React from 'react';

import 'react-dom';
import { translate } from 'react-i18next';

const ArticleItem = ({ post }) => (
  <div className="4u 12u(mobile)">
    <section className="box">
      <a href="" className="image featured">
        <img src={post.thumbnail} alt={post.title} />
      </a>
      <header><h3>{post.title}</h3></header>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    </section>
  </div>
);

ArticleItem.propTypes = {
  post: React.PropTypes.shape({}).isRequired,
};

const items = group => group.map(item => <ArticleItem post={item} key={item.id} />);

const ArticleSection = ({ t, posts }) => {
  const rows = posts.groupBy((_, key) => Math.floor(key / 3))
                    .map(group => <div className="row" key={group}>{items(group)}</div>);
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
