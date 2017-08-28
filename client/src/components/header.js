import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  // renderLinks() {
  //   if (this.props.authenticated) {
  //     // show a link to sign out
  //     return <li className="nav-item">
  //       <NavLink className="nav-link" to="/signout">Sign Out</NavLink>
  //     </li>
  //   } else {
  //     // show a link to sign in or sign up
  //     return [
  //       <li className="nav-item" key={1}>
  //         <NavLink className="nav-link" to="/signin">Sign In</NavLink>
  //       </li>,
  //       <li className="nav-item" key={2}>
  //         <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
  //       </li>
  //     ];
  //   }
  // }

  render() {
    return (
      <nav className="navbar navbar-light">
        <NavLink to="/" className="navbar-brand">Redux Auth</NavLink>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            Sign in
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
