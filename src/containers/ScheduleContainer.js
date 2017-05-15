import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const sessionInfo = state.get('sessions');

  const rawTimes = sessionInfo.get('times');
  const days = rawTimes.filter(time => time.parent === 0);
  const times = rawTimes.filterNot(time => time.parent === 0)
                        .groupBy(time => time.parent);
  const sessions = sessionInfo.get('sessions').groupBy(session => session.time);
  const newState = {
    days,
    times,
    sessions,
    rooms: sessionInfo.get('rooms'),
    types: sessionInfo.get('types'),
  };

  return newState;
};

const Container = component => connect(mapStateToProps)(component);

export default Container;
