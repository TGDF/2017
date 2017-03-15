import React from 'react';
import 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Schedule from './Schedule';

const App = () => (
  <Router>
    <div>
      <Header />
      <div id="wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/schedule" component={Schedule} />
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
