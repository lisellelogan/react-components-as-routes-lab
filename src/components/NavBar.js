import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div>
        <NavLink
        to="/"
        >Home</NavLink>
      </div>
      <div>
        <NavLink
        to="/movies"
        >Movies</NavLink>
      </div>
      <div>
        <NavLink
        to="/directors"
        >Directors</NavLink>
      </div>
      <div>
        <NavLink
        to="/actors"
        >Actors</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
