import React from "react";
import { Link } from "react-router-dom";
import navStyles from "./navbar.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../Resource/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar() {
  return (
    <div>
      <nav className={navStyles.navbar}>
        <Link to="/">
          <div className={navStyles.col_logo}>
            <img src={Logo} alt="Virgin America" />
          </div>
        </Link>
        <div className={navStyles.vl}></div>
        <div className={navStyles.col_tabs}>
          <Link to="/book" className={navStyles.tabs}>
            Book
          </Link>
          <Link to="/checkIn" className={navStyles.tabs}>
            Check In
          </Link>
          <Link to="/manage" className={navStyles.tabs}>
            Manage
          </Link>
        </div>
        <div className={navStyles.vl}></div>
        <div className={navStyles.links}>
          <a href="#">Deals</a>
          <a href="#">Flying With Us</a>
          <a href="#">Where We Fly</a>
          <a href="#">Shop</a>
          <a href="#">FAQ</a>
          <a href="#">Fees</a>
        </div>
        <div className={navStyles.access}>
          <Link to="/signIn" className={navStyles.tabs1}>
            Sign In
          </Link>
          <Link to="/signUp" className={navStyles.tabs}>
            Sign Up
          </Link>
          <div className={navStyles.vl1}></div>
          <FontAwesomeIcon icon={faBars} className={navStyles.dropdown} />
        </div>
      </nav>
    </div>
  );
}
