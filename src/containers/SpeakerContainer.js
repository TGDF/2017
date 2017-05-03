import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  const speakers = state.get('speakers');
  const speakerID = parseInt(props.match.params.id, 10);

  const speaker = speakers.find(item => item.id === speakerID);

  let name = '';
  let avatar = '';
  let description = '';
  let session = [];
  if (speaker) {
    name = speaker.name;
    avatar = speaker.avatar;
    description = speaker.description;
    session = speaker.session;
  }

  const newState = {
    name, avatar, description, session,
  };

  return newState;
};

const Container = component => connect(mapStateToProps)(component);

export default Container;
