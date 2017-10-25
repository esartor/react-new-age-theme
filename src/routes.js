import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import FAQPage from './pages/FAQ';


const Routes = props => (
  <Router {...props} basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/faq" component={FAQPage} />
    </div>
  </Router>
);

export default Routes;
