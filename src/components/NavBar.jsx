import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Nav = styled.nav`
    margin-left: 24px;
`

const NavTitle = styled.h1`
  color: white;
  font-size: 36px;
  margin-top: 10px;
  margin-bottom: 4px;
  font-weight: 700;  
`

const NavSubtitle = styled.h2`
  color: white;
  font-size: 24px;
  margin-top: 4px;
`

const NavBar = () => {

  return (
    <Nav>
      <Link to="/">
        <NavTitle>Working It</NavTitle>
        <NavSubtitle>Training in Your Hands</NavSubtitle>
      </Link>
    </Nav>
  )
}

export default NavBar;