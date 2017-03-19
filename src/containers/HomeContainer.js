import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const newState = {
    posts: state.get('posts').posts,
  };

  return newState;
};

const Container = component => connect(mapStateToProps)(component);

export default Container;
