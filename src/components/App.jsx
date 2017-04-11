import React from 'react';
import 'react-dom';
import { Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Schedule from './Schedule';
import Partner from './Partner';

const App = () => (
  <div id="page-wrapper">
    <Header />
    <div id="wrapper">
      <Route exact path="/" component={Home} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/partners" component={Partner} />
    </div>
    <Footer />
  </div>
);

export default App;
