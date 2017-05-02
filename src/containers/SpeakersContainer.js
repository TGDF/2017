import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const newState = {
    speakers: state.get('speakers'),
  };

  return newState;
};

const Container = component => connect(mapStateToProps)(component);

export default Container;
