import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Feeling from '../pages/Feeling';
import Psychologist from '../pages/Psychologist';
import PsychologistDetails from '../pages/PsychologistDetails';
import Profile from '../pages/Profile';
import Payment from '../pages/Payment';
import TherapyGroup from '../pages/TherapyGroup';
import TherapyGroupDetails from '../pages/TherapyGroupDetails';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/o-que-esta-sentindo" component={Feeling} />
      <Route exact path="/busque-profissionais" component={Psychologist} />
      <Route exact path="/profissional/:id" component={PsychologistDetails} />
      <Route exact path="/perfil/:id" component={Profile} />
      <Route exact path="/pagamentos/:id" component={Payment} />
      <Route exact path="/grupos-terapia" component={TherapyGroup} />
      <Route exact path="/grupos-terapia/:name" component={TherapyGroupDetails} />
    </Switch>
  </Router>
);

export default Routes;
