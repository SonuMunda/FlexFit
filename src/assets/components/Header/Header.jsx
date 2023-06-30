import "./Header.css";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const toggleNav = () => {
    if (navActive === false) {
      setNavActive(true);
    } else {
      setNavActive(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <header className="header center">
      <div className="container around">
        <div className="menubar" onClick={toggleNav}>
          <FaBars />
        </div>
        <div className="brand">
          <NavLink to="/">
            <h1 className="text-3xl uppercase px-8 py-4 font-bold text-center">
              Flex Fit
            </h1>
          </NavLink>
        </div>
        <nav className={`navbar center ${navActive ? "nav-active" : ""}`}>
          <div className="container center">
            <ul className="navlist center">
              <li
                className="list-item"
                onClick={() => {
                  setNavActive(false);
                  scrollToTop();
                }}
              >
                <NavLink to="/" className="navlink p-2 mx-2">
                  Home
                </NavLink>
              </li>
              <li
                className="list-item"
                onClick={() => {
                  setNavActive(false);
                  scrollToTop();
                }}
              >
                <NavLink to="/about" className="navlink p-2 mx-2">
                  About
                </NavLink>
              </li>
              <li
                className="list-item"
                onClick={() => {
                  setNavActive(false);
                  scrollToTop();
                }}
              >
                <NavLink to="/classes" className="navlink p-2 mx-2">
                  Classes
                </NavLink>
              </li>
              <li
                className="list-item"
                onClick={() => {
                  setNavActive(false);
                  scrollToTop();
                }}
              >
                <NavLink to="/trainers" className="navlink p-2 mx-2">
                  Trainers
                </NavLink>
              </li>
              <li
                className="list-item"
                onClick={() => {
                  setNavActive(false);
                  scrollToTop();
                }}
              >
                <NavLink to="/contact" className="navlink p-2 mx-2">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="header-btn">
          <button className="joinus-btn uppercase px-8 py-4 rounded">
            Join us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
