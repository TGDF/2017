import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';
import Container from '../containers/ScheduleContainer';

import ScheduleTable from './schedule/ScheduleTable';

import { requestSessions } from '../actions/sessions';

// TODO: Title should auto concat
class Schedule extends React.Component {
  componentWillMount() {
    requestSessions()(this.props.dispatch);
  }

  tables() {
    return this.props.days.map(day =>
      <ScheduleTable
        day={day}
        rooms={this.props.rooms}
        times={this.props.times.get(day.id)}
        sessions={this.props.sessions}
        types={this.props.types}
      />,
    );
  }

  render() {
    return (
      <div id="coming-soon">
        <Helmet>
          <title>{`${this.props.t('nav.schedule')} | ${this.props.t('site_name')}`}</title>
          <meta property="og:url" content="https://2017.tgdf.tw/schedule" />
          <meta property="og:title" content={`${this.props.t('nav.schedule')} | ${this.props.t('site_name')}`} />
          <meta property="og:description" content={this.props.t('home.cfp.introduce')} />
          <meta property="og:image" content="https://2017.tgdf.tw/static/tgdf.png" />
        </Helmet>
        <div className="box">
          { this.tables() }
        </div>
      </div>
    );
  }
}

Schedule.propTypes = {
  t: React.PropTypes.func.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  days: React.PropTypes.shape({
    map: React.PropTypes.func,
  }).isRequired,
  times: React.PropTypes.shape({
    get: React.PropTypes.func,
  }).isRequired,
  rooms: React.PropTypes.shape({}).isRequired,
  types: React.PropTypes.shape({}).isRequired,
  sessions: React.PropTypes.shape({}).isRequired,
};

export default translate()(Container(Schedule));
