import React from "react";
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (
    <nav className="site-header">
      <Link to="/">
        <h1>Working It</h1>
        <h2>Put Your Training in Your Hands</h2>
      </Link>
    </nav>
  )
}

export default NavBar;