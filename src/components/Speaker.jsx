import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';

import { requestSpeakers } from '../actions/speakers';
import Container from '../containers/SpeakerContainer';

class Speaker extends React.Component {
  componentWillMount() {
    this.props.dispatch(requestSpeakers());
  }

  rules() {
    if (this.props.session.length === 0) {
      return <div />;
    }
    return <hr />;
  }

  session() {
    if (this.props.session.length === 0) {
      return <div />;
    }

    return this.props.session.map(session => (
      <div key={session.id}>
        <h3>{session.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: session.excerpt }} />
      </div>
    ));
  }

  render() {
    return (
      <section className="container">
        <Helmet title={`${this.props.name} | ${this.props.t('site_name')}`} />
        <article className="box post">
          <div className="row">
            <div className="4u 12u(mobile)">
              <a href="" className="image"><img src={this.props.avatar} alt={this.props.name} /></a>
            </div>
            <div className="8u 12u(mobile)">
              <header>
                <h2>{this.props.name}</h2>
              </header>
              <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
              {this.rules()}
              {this.session()}
            </div>
          </div>
        </article>
      </section>
    );
  }
}

Speaker.propTypes = {
  name: React.PropTypes.string.isRequired,
  avatar: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  session: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  t: React.PropTypes.func.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default translate()(Container(Speaker));
