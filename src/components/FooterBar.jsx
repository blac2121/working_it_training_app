import React from "react";
import styled from 'styled-components'

const FooterAttribution = styled.h6`
  color: white;
  text-align: center;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  width: 100%;
`

const FooterBar = () => {

  return (
    <FooterAttribution>Working It: Training in Your Hands created by BL</FooterAttribution>
  )
}

export default FooterBar;