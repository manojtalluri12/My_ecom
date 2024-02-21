import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Nav.css";
const NavBar = ({ cart, order }) => {
  return (
    <div className="navbar">
      <div className="navleft">
        <Link to="/" className="links ">
          Store
        </Link>
      </div>
      <div className="navleft">
        <Link to="/" className="links">
          Products
        </Link>
        <Link to="/cart" className="links">
          <FaShoppingCart /> <sup>{cart.length}</sup>
        </Link>
        <Link to="/orders" className="links">
          Orders<sup>{order.length}</sup> 
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
