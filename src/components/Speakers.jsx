import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';

import Container from '../containers/SpeakersContainer';
import { requestSpeakers } from '../actions/speakers';
import SpeakerSection from './speakers/SpeakerSection';

class Speakers extends React.Component {
  componentWillMount() {
    this.props.dispatch(requestSpeakers());
  }

  speakers() {
    return this.props.speakers.groupBy((_, index) => Math.floor(index / 4)).map(group => (
      <SpeakerSection key={group} speakers={group} />
    ));
  }

  render() {
    return (
      <section>
        <Helmet title={`${this.props.t('nav.speakers')} | ${this.props.t('site_name')}`} />
        {this.speakers()}
      </section>
    );
  }
}

Speakers.propTypes = {
  t: React.PropTypes.func.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  speakers: React.PropTypes.shape({
    groupBy: React.PropTypes.func,
  }).isRequired,
};

export default translate()(Container(Speakers));
