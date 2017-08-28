import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//
import Header from './Header';
import Signin from './auth/signin';
import Welcome from './Welcome';
import Signout from './auth/signout';
import Signup from './auth/signup';
import Feature from './feature';
import RequireAuth from './auth/require_auth';

export default class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
        <Header/>
        <Route path="/" component={Welcome} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={RequireAuth(Feature)} />
      </div>
    </BrowserRouter>
    );
  }
}
