import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to="/">Home</NavLink> | &nbsp;
      <NavLink to="/posts">PostList</NavLink> | &nbsp;
      <NavLink to="/posts/write">PostWrite</NavLink>
    </div>
  );
};

export default Header;
