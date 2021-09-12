import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import './Navigation.scss';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
  <nav className="navigation">
    <NavLink
      to="/"
      exact
      className="link home"
      activeClassName="active-link"
    >
      Home
    </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className="link"
          activeClassName="active-link"
        >
          Contacts
        </NavLink>
        )}
  </nav>
  );
}

export default Navigation;