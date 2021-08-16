import React, { useState } from "react";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiLogOut } from "react-icons/bi";
import { IconContext } from "react-icons";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <Headroom style={{ position: "fixed" }}>
      <nav className="navbar">
        <Link to="/" className="navbar-logo text-2xl" onClick={closeMobileMenu}>
          Space Origin 🌌
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/planet" className="nav-links" onClick={closeMobileMenu}>
              Planets
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/spacecrafts"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Spacecrafts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item logout">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                <div>
                  <BiLogOut />
                </div>
              </IconContext.Provider>
            </Link>
          </li>
        </ul>
      </nav>
    </Headroom>
  );
}

export default Navbar;
