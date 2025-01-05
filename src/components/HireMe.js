/* eslint-disable max-len */
import React from 'react'
import { CardBox, CardText, Span } from './globalStyling'

export const HireMe = () => {
  return (
    <CardBox selectedColor="#185757" textColor="#89D8D8">
      <CardText>
        <h2><Span>who are you?</Span> perhaps you’re looking for an intern for a few months, or a junior hire to off load the basics from more senior staff. </h2>
      </CardText>
      <CardText>
        <h3>My contribution</h3>
        <p>I&apos;ve learned that it can be really challenging to translate designs pixel-perfect, and that just following Figma spacings and sizes for some reason doesn&apos;t translate to that 1:1 implementation.</p>
        <p>I&apos;ll be an eager learner open to learn how you work, and make sure to keep up with the latest of CSS possibilities.</p>
        <p>I&apos;ll put a lot of effort into making sure we&apos;re doing accessible implementations now that the EU accessibility act is in action.</p>
      </CardText>
    </CardBox>
  )
}
