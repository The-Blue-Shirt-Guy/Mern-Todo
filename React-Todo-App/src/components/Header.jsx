import React from "react";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Header = () => {
  const { user, dispatch } = useContext(AuthContext);
  console.log(user);

  const logoutFunction = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("userToken");
  };

  return (
    <div className="header">
      <h1>
        <Link to="/">TaskList</Link>
      </h1>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          {/* <div className="avtar"></div> */}
          <button onClick={logoutFunction}>Logout</button>
        </div>
      ) : (
        <div className="right-nav-div">
          <Link to="register">Register</Link>
          <Link to="login">login</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
