import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="SideContainer">
      <ul>
        <li>
          <Link to="products" >Get All Products</Link>
        </li>
        <li>
          <a href="/#">Get All Categories</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
