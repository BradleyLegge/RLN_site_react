import React from "react";
import rln_logo from "../images/rln_logo_desktop.png";

const Footer = () => {
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="footer-nav">
      <div className="footer-container">
        <img className="footer-logo" src={rln_logo} alt="RLN gaming logo" />
        <div className="footer-links">
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

export default Footer;
