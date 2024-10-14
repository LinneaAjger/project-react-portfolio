import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa';
import styled from 'styled-components/macro'

// eslint-disable-next-line max-len
export const Icons = ({ boxWidth, linkWidth, linkedin, color }) => {
  return (
    <StyledLink color={color} linkWidth={linkWidth} href="https://www.linkedin.com/in/linneaajger" aria-label="link to Linneas linkedin-profile">
      <OuterBox color={color} boxWidth={boxWidth}>
        <FaLinkedinIn />
      </OuterBox>
      <p>{linkedin}</p>
    </StyledLink>
  )
}

export const StyledIcons = styled.img`
margin: ${(props) => (props.iconMargin)};
width: ${(props) => (props.iconWidth)};
`

const OuterBox = styled.div`
border: 2px solid ${(props) => (props.color)};
border-radius: 50%;
width: 3rem;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
transition: 0.3s ease-in-out;

&:hover {
transform: scale(1.1);
transform: translate(0%,-10%);}

svg {
  height: 2rem;
  width: 2rem;
}
`

const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.linkWidth)};
  text-decoration: none;
  text-align: center;
  color: ${(props) => (props.color)};

p{
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 20px;
}

svg {
  transition: 0.3s ease-in-out;
  padding: 5px;

}

& :hover > svg, .OuterBox:hover {
transform: scale(1.1)
}
  `