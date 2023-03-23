import React from "react";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/">TaskList</Link>
      </h1>
      <Link to="register">
        <div className="avtar"></div>
      </Link>
    </div>
  );
};

export default Header;
