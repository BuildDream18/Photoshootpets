import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <Link
        to="/"
        className="navbar"
        style={{ justifyContent: "center", position: "sticky" }}
      >
        <i className="fa-solid fa-paw spaceBetween"></i>
        <span className="logo-text">PhotoShoot Pets</span>
      </Link>
    </>
  );
}

export default Navbar;
