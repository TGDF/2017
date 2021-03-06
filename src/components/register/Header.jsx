import React from 'react';
import 'react-dom';
import { translate } from 'react-i18next';

const registerUrl = 'https://kktix.com/tickets_widget?slug=2017tgdf';

const Header = ({ t }) => (
  <section id="intro" className="register__header container">
    <div className="row">
      <div className="4u 12u(mobile)">
        <section className="first">
          <a href={registerUrl} target="_blank" rel="noopener noreferrer">
            <i className="icon featured fa-user" />
          </a>
          <header>
            <h2>{t('register.normal.name')}</h2>
            <h3>TWD 2,500</h3>
          </header>
          <p>{t('register.normal.description')}</p>
        </section>
      </div>
      <div className="4u 12u(mobile)">
        <section className="middle">
          <a href={registerUrl} target="_blank" rel="noopener noreferrer">
            <i className="icon featured fa-users" />
          </a>
          <header>
            <h2>{t('register.group.name')}</h2>
            <h3>TWD 1,800</h3>
          </header>
          <p>{t('register.group.description')}</p>
        </section>
      </div>
      <div className="4u 12u(mobile)">
        <section className="last">
          <a href={registerUrl} target="_blank" rel="noopener noreferrer">
            <i className="icon featured fa-graduation-cap" />
          </a>
          <header>
            <h2>{t('register.student.name')}</h2>
            <h3>TWD 1,000</h3>
          </header>
          <p>{t('register.student.description')}</p>
        </section>
      </div>
    </div>
  </section>
);

Header.propTypes = {
  t: React.PropTypes.func.isRequired,
};

export default translate()(Header);
