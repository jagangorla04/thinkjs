import React, { useState } from 'react';
import './styles.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Brand Logo</div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <a href="#">About Us</a>
        <a href="#">Useful Resources</a>
        <a href="#">Support</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
