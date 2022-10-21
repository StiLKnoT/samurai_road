import React from "react";
import { NavLink } from "react-router-dom";
import nav from "./Navbar.module.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className={nav.ul_list}>
        <li className={nav.li}>
          <NavLink to="/profile">
            Profile
          </NavLink>
        </li>
        <li className={nav.li}>
          <NavLink to="/dialogs">Message</NavLink>
        </li>
        <li className={nav.li}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className={nav.li}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className={nav.li}>
          <br/>
        </li>
        <li className={nav.li}>
          <NavLink to="/setting">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
