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
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink className="navbar-brand" to="/">React Auth Client</NavLink>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><NavLink exact activeClassName="activeNav" to="/signin">sign in</NavLink></li>
            </ul>
          </div>
        </div>
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
