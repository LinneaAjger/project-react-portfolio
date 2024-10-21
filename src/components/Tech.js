import React from 'react'
import styled from 'styled-components/macro'
import { CardBox } from './globalStyling'

export const Tech = () => {
  return (
    <CardBox selectedColor="#726021" textColor="#E7D69B">
      {// eslint-disable-next-line max-len
      }<TechContent> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper tristique dolor, in aliquet est tincidunt non. Quisque velit erat, lobortis sed convallis eget, fringilla a elit. Suspendisse scelerisque, urna id sodales elementum, tortor arcu tempor est, id lobortis orci lorem vitae lacus. Nunc aliquet finibus rutrum. Sed eget condimentum.          HTML • CSS • Flexbox • JavaScript ES6 • JSX • React • React Hooks • Web accessibility • Redux • Node.js • Mongo DB • API:s • Mob-programming • Pair-programming • GitHub</TechContent>
    </CardBox>
  )
}
export const TechContent = styled.p`
    text-align: center;
    `