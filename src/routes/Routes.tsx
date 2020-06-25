import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Feeling from '../pages/Feeling';
import Psychologist from '../pages/Psychologist';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/feeling" component={Feeling} />
      <Route exact path="/psychologist" component={Psychologist} />
    </Switch>
  </Router>
);

export default Routes;
