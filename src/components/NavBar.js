import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/about"> About us</Link>
      <Link to="/api">API</Link>
    </nav>
  );
}

export default Navbar;
