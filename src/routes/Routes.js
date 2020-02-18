import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Main from '../screens/Main';
import Login from '../screens/Login';
import Barbecues from '../screens/Barbecues';

export default ({ user }) => {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => (!!user._id
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
      )}
    />
  );

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/barbecues" component={Barbecues} />
        <Route path="*" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};
