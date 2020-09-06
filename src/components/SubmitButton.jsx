import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #42C9FB; 
  border: none;
  color: white;
  padding: 15px 32px;
  font-size: 16px;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background: #68BBDA;
  }
`

const SubmitButton = (props) => {

  return (
    <Button>{props.label}</Button>
  )
  
}

export default SubmitButton;