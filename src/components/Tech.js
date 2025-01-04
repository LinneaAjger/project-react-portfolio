/* eslint-disable max-len */
import React from 'react'
import { CardBox, CardText, Span } from './globalStyling'

export const Tech = () => {
  return (
    <CardBox selectedColor="#726021" textColor="#E7D69B">
      <CardText>
        <h2><Span>tinkering-on-the-side</Span>  while balancing my ordinary job as physiotherapist —and being a mom. </h2>
      </CardText>
      <CardText>
        <h3>What I&apos;m up to</h3>
        <p>Since the bootcamp I&apos;ve polished up some of the projects on this page, and making this page.</p>
        <p>I&apos;ve had chats with my mentor that has nudged me towards exploring and figuring out Next.js even more.</p>
        <p>I&apos;ve partaken in a Figma UI designer course to better figure out the two sides of the same coin that is design and code.</p>
        {/* <p>HTML • CSS • Flexbox • JavaScript ES6 • JSX • React • React Hooks • Web accessibility • Redux • Node.js • Mongo DB • API:s • Mob-programming • Pair-programming • GitHub</p> */}
      </CardText>
    </CardBox>
  )
}
