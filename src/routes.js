import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './screens/Main';
import Login from './screens/Login';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);
