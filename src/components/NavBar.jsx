import React from "react";
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (
    <nav className="site-header">
      <Link to="/">
        <h1 className="nav-title">Working It</h1>
        <h2 className="nav-subtitle">Training in Your Hands</h2>
      </Link>
    </nav>
  )
}

export default NavBar;