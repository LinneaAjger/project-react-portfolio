import React from 'react'
import styled from 'styled-components/macro'

export const Footer = () => {
  return (
    <StyledInfo>
      <div>
        <h2>linnéa ajger</h2>
        <a href="mailto:linnea.ajger@gmail.com" aria-label="send email to Linnéa">get in touch</a>
        <a href="https://www.linkedin.com/in/linneaajger" aria-label="Link to Linnéas linked-in page">linkedin</a>
      </div>
    </StyledInfo>

  )
}

export const StyledInfo = styled.footer`
background-color: #0D3138;
justify-content: center;
font-weight: bold;
color: #89D8D8;
display: flex;
text-align: center;
margin-top: 50px;
padding: 120px 0 120px 0;  

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-top: 30px;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 30px;
    text-shadow: rgba(137,216,216,0.3) 0px 0px 90px;
  }

a {
    text-decoration: none;
    color: #70B0B0;
    font-family: "Uncut Sans";
    padding: 20px 0px;
    border: 0.5px solid #185757;
    border-radius: 6px;
    margin-top: 10px;
    background-color: #0D3138;
    box-shadow: rgba(137,216,216,0.1) 0px 2px 60px;
    width: 50%;
  }

@media (min-width: 840px) {
  margin-top: 240px;
  padding: 240px 0 260px 0;

  a:hover {
    background-color: #70B0B0;
    color: #0D3138;
    transition: 0.5s ease-in-out;
  }
}

@media (min-width: 1024px) {
  margin-top: 240px;
  padding: 130px 0 130px 0;

  h2 {
      font-size: 45px;;
    }
}
`

