import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Main from '../screens/Main';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
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
    <Switch>
      <Route path="/" exact><Main /></Route>
      <Route path="/login"><Login /></Route>
      <Route path="/signup"><Signup /></Route>
      <PrivateRoute path="/barbecues" exact><Barbecues /></PrivateRoute>
      <PrivateRoute path="/barbecues/forms" exact><BarbecueForm /></PrivateRoute>
      <PrivateRoute path="/barbecues/forms/:id" exact><BarbecueForm /></PrivateRoute>
      <PrivateRoute path="/barbecues/:id" exact><BarbecueDetail /></PrivateRoute>
      <Route path="*"><Main /></Route>
    </Switch>
  );
};
