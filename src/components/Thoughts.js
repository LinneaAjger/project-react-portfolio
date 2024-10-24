/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components/macro'
import { SingleTag, GridDiv } from './globalStyling'

export const Thoughts = () => {
  return (
    <GridDiv>
      <StyledArticle>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@linnea.ajger/work-smart-not-fast-5-tips-to-code-more-efficiently-3bef910f4572">
          <img src="https://miro.medium.com/max/1400/1*KOwo_VXQxzO7IxBPC6KRgg.png" alt="blog post" />
          <h5>OCT 2022</h5>
          <h4>Work smart not fast</h4>
          <p>Read about my latest hacks to code more efficiently! 👩‍💻⚡️</p>
          <SingleTag>blog post</SingleTag>
        </a>
      </StyledArticle>
      <StyledArticle>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@linnea.ajger/learning-new-things-4be662bc7c70">
          <img src="https://miro.medium.com/max/1400/1*EQNmkL_KRFVvj1Tor0TeqQ.jpeg" alt="blog post" />
          <DateHeader>OCT 2022</DateHeader>
          <h4>Learning new things</h4>
          <p>Read about my thoughts from the first 3 months in the Technigo Web Developer Bootcamp.</p>
          <SingleTag>blog post</SingleTag>
        </a>
      </StyledArticle>
    </GridDiv>

  )
}

export const StyledArticle = styled.article`
    padding: 30px;
    border-radius: 30px;
    /* background-color: #a0bcb8; */
    background-color: #e7783d38;;
    width: 100%;
    transition: 0.3s ease-in-out;

  img { 
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 20px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  h4 {
    font-weight: 700;
    text-transform: uppercase;
    color: #551a8b;
    margin: 0.5rem 0rem;  }


&:hover {
  transform: scale(1.01);
  background-color: #f3b492;
  /* background-color: #bdd2cf; */
}

@media (min-width: 668px) {
  width: 100%;

}
`

const DateHeader = styled.p`
   font-size: 1.0rem; 
`