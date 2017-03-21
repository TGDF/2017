import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';

const Introduce = ({ t }) => (
  <section id="intro" className="container">
    <div className="row">
      <div className="12u 12u(mobile)">
        <section className="first">
          <i className="icon featured fa-gamepad" />
          <header>
            <h2>{t('site_name')}</h2>
          </header>
          <p>{t('home.cfp.introduce')}</p>
        </section>
      </div>
    </div>
  </section>
);

Introduce.propTypes = {
  t: React.PropTypes.func.isRequired,
};

export default translate()(Introduce);
