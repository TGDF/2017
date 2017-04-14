import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const newState = {
    sponsors: state.get('sponsors').get('sponsors'),
    levels: state.get('sponsors').get('levels'),
  };

  return newState;
};

const Container = component => connect(mapStateToProps)(component);

export default Container;
