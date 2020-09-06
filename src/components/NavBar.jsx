import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-bottom: 30px;
`
const NavIcon = styled.div`
  margin-right: 15px;
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
const headerIcon =
  <FontAwesomeIcon
    icon={faRunning}
    size="4x"
    color="#42C9FB"
  />

const NavBar = () => {

  return (
    <Link to="/">
      <Nav>
        <NavIcon>
          {headerIcon}
        </NavIcon>
        <div>
          <NavTitle>Working It</NavTitle>
          <NavSubtitle>Training in Your Hands</NavSubtitle>
        </div>
      </Nav>  
    </Link>
  )
}

export default NavBar;