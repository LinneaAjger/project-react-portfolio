import React from 'react'
import styled from 'styled-components/macro'
import { TitleTertiary } from './globalStyling'

export const Footer = () => {
  return (
    <footer>
      <TitleTertiary selectedColor="white" marginTop="0">Contact</TitleTertiary>
      <StyledInfo>
        <p>Linnéa Ajger</p>
        <a href="tel:004673-0860444" aria-label="phone number">+46 73 08 60 444</a>
        <a href="mailto:linnea.ajger@gmail.com" aria-label="Email adress">linnea.ajger@gmail.com</a>
      </StyledInfo>
    </footer>

  )
}

export const StyledInfo = styled.div`
  font-size: 1rem;
  line-height: 1.7rem;  
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 3rem 0 3rem 0;
  
  a {
    text-decoration: none;
    color: white;
    transition: 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      }
  }
`

