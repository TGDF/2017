import React from 'react';
import 'react-dom';
import { Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Schedule from './Schedule';
import Article from './Article';
import Partner from './Partner';
import Speakers from './Speakers';

const App = () => (
  <div id="page-wrapper">
    <Header />
    <div id="main-wrapper">
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/speakers" component={Speakers} />
        <Route path="/partners" component={Partner} />
        <Route path="/article/:id" component={Article} />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
