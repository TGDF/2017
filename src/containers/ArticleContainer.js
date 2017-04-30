import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  const posts = state.get('posts').get('posts');
  const post = posts.find(object => object.id === parseInt(props.match.params.id, 10));

  let title = '';
  let hero = '';
  let content = '';

  if (post) {
    title = post.title;
    hero = post.hero;
    content = post.content;
  }

  const newState = {
    title,
    hero,
    content,
  };

  return newState;
};

const Container = component => connect(mapStateToProps)(component);

export default Container;
