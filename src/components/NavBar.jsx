import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning } from "@fortawesome/free-solid-svg-icons";


const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-left: 24px;
    margin-bottom: 30px;
  }

  @media (max-width: 425px) {
    width: 65%;
    margin: 0 auto;
  }
`
const NavIcon = styled.div`
  margin-right: 15px;
`

const NavHeading = styled.div`
  display: flex;
  flex-direction: column;
`
const NavTitle = styled.h1`
  color: white;
  font-size: 36px;
  margin-top: 10px;
  margin-bottom: 4px;
  font-weight: 700;  

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }

  @media (max-width: 425px) {
    width: 400px;
    margin-bottom: 5px;
  } 
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
        <NavHeading>
          <NavTitle>Working It</NavTitle>
          <NavSubtitle>Training in Your Hands</NavSubtitle>
        </NavHeading>
      </Nav>  
    </Link>
  )
}

export default NavBar;