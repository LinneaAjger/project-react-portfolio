/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router'

export const About = () => {
  return (
    <BioText>
      <h6>Frontend Developer | Passionate about Coding and Design</h6>
      <p> A frontend developer with a strong passion for creating beautiful, functional websites. I thrive on building pixel-perfect experiences and pay close attention to the smallest details that make a big difference. My focus is not only on crafting visually appealing designs but also on ensuring that websites are responsive and accessible for everyone. I believe that good design should be seamless and inclusive, and I’m always eager to push the boundaries of what’s possible in frontend development.</p>
      <p>I&apos;m currently looking for work - please take <NavLink to="/contact">contact</NavLink></p>
    </BioText>
  )
}

const BioText = styled.div`
    color: #000000;
    background: #dd9fd3;
    padding: 20px;
    border-radius: 2px;
    
  p {
    margin-top: 10px;
  }

  a {
    color: inherit;

  }

`