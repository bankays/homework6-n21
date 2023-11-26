import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Nav.css";
const RESRICED_ROUTES_FOR_NAV = ["/auth"];

const Nav = () => {
  const { pathname } = useLocation();
  return RESRICED_ROUTES_FOR_NAV.includes(pathname) ? null : (
    <div className="nav">
      <div className="l">
        <img className="logo" src="../setting.png" alt="" />
        <h1>Dashboard</h1>
      </div>

      <ul className="nav__list">
        <img className="home2" src="../home2.svg" alt="" />
        <li className="li1">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <img className="logo2" src="../logo2.svg" alt="" />
        <li className="sss">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
            to="/auth"
          >
            Product
          </NavLink>
        </li>
        <img className="logo3" src="../logo3.svg" alt="" />
        <li className="sss2">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
            to="/customers"
          >
            Customers
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
