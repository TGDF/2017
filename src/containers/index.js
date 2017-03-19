import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const newState = {
    posts: state.posts,
  };

  return newState;
};

const Container = component => connect(mapStateToProps)(component);

export default Container;
