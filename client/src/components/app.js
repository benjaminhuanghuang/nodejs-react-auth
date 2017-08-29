import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//
import Header from './Header';
import SignIn from './auth/SignIn';
import Welcome from './Welcome';
import Signout from './auth/Signout';
import Signup from './auth/Signup';
import Feature from './Feature';
import RequireAuth from './auth/require_auth';

export default class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
        <Header/>
        <Route exact path="/" component={Welcome} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={Signout} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={RequireAuth(Feature)} />
      </div>
    </BrowserRouter>
    );
  }
}
