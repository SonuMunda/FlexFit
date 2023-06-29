import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header center">
      <div className="container around">
        <div className="brand">
          <NavLink to="/">
            <h1 className="text-3xl uppercase px-8 py-4 font-bold">Flex Fit</h1>
          </NavLink>
        </div>
        <nav>
          <div className="container">
            <ul className="navlist center">
              <li className="list-item">
                <NavLink to="/" className="navlink p-2 mx-2">
                  Home
                </NavLink>
              </li>
              <li className="list-item">
                <NavLink to="/about" className="navlink p-2 mx-2">
                  About
                </NavLink>
              </li>
              <li className="list-item">
                <NavLink to="/classes" className="navlink p-2 mx-2">
                  Classes
                </NavLink>
              </li>
              <li className="list-item">
                <NavLink to="/trainers" className="navlink p-2 mx-2">
                  Trainers
                </NavLink>
              </li>
              <li className="list-item">
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
