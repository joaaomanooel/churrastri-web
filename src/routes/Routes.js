import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Main from '../screens/Main';
import Login from '../screens/Login';
import Barbecues from '../screens/Barbecues';
import BarbecueForm from '../screens/BarbecueForms';
import BarbecueDetail from '../screens/BarbecueDetail';

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
        <PrivateRoute path="/barbecues" exact component={Barbecues} />
        <PrivateRoute path="/barbecues/forms" exact component={BarbecueForm} />
        <PrivateRoute path="/barbecues/:id" exact component={BarbecueDetail} />
        <Route path="*" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};
