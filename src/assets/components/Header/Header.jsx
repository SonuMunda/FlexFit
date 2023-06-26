import "./Header.css";
// import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header center">
      <div className="container around">
        <div className="brand">
          <a href="/">
            <h1 className="text-3xl uppercase px-8 py-4 font-bold">Flex Fit</h1>
          </a>
        </div>
        <nav>
          <div className="container">
            <ul className="navlist center">
              <li className="list-item">
                <a href="/" className="navlink p-2 mx-2">
                  Home
                </a>
              </li>
              <li className="list-item">
                <a href="/" className="navlink p-2 mx-2">
                  About
                </a>
              </li>
              <li className="list-item">
                <a href="/" className="navlink p-2 mx-2">
                  Classes
                </a>
              </li>
              <li className="list-item">
                <a href="/" className="navlink p-2 mx-2">
                  Trainers
                </a>
              </li>
              <li className="list-item">
                <a href="/" className="navlink p-2 mx-2">
                  Contact
                </a>
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
