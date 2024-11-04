/* eslint-disable max-len */
import React from 'react'
import { CardBox, CardText, Span } from './globalStyling'

export const Tech = () => {
  return (
    <CardBox selectedColor="#726021" textColor="#E7D69B">
      <CardText>
        <h2><Span>Lorem ipsum dolor</Span> sit amet, consectetur adipiscing elit. Vivamus ullamcorper tristique dolor, in aliquet est tincidunt non. </h2>
      </CardText>
      <CardText>
        <h3>What I&apos;m up to</h3>
        <p>Quisque velit erat, lobortis sed convallis eget, fringilla a elit. Suspendisse scelerisque, urna id sodales elementum, tortor arcu tempor est, id lobortis orci lorem vitae lacus. Nunc aliquet finibus rutrum. Sed eget condimentum.          HTML • CSS • Flexbox • JavaScript ES6 • JSX • React • React Hooks • Web accessibility • Redux • Node.js • Mongo DB • API:s • Mob-programming • Pair-programming • GitHub
        </p>
      </CardText>
    </CardBox>
  )
}
