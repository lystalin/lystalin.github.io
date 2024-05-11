import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <Link className="navbar-brand" to="/">Jazmin Reyna</Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleNavCollapse}
        aria-controls="navbarSupportedContent"
        aria-expanded={!isNavCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about/">About Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
