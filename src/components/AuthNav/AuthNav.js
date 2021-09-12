import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthNav.scss';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className="link registration"
        activeClassName="active-link"
      >
        Registration
      </NavLink>
      
      <NavLink
        to="/login"
        exact
        className="link"
        activeClassName="active-link"
      >
        Login
      </NavLink>
    </div>
  );
}