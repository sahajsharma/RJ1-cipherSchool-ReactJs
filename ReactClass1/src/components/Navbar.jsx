import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="home" href="/">
        Home
      </a>
      <a href="/contact">News</a>
      <a href="/contact">Contact</a>
      <a href="/about">About</a>
    </nav>
  );
};

export default Navbar;
