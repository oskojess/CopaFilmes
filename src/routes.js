import React from 'react';

import { Route, Redirect } from 'react-router';

import { Router, Switch } from 'react-router-dom';

import history from './history';

import Home from './pages/Home';
import Campeoes from './components/Campeoes';


const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/campeoes" component={Campeoes} />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  )
}

export default Routes;