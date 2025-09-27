import React from "react";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <main className="content">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
