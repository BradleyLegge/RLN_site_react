import React from "react";
import rln_logo from "../images/rln_logo_desktop.png";

const Header = () => {
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="header-nav">
      <div className="navbar-container">
        <img className="navbar-logo" src={rln_logo} alt="RLN gaming logo" />
        <div className="navbar-links">
          {links.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
