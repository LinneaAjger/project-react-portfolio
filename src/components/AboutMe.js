/* eslint-disable max-len */
import React from 'react'
import { CardBox, CardText, Span } from 'components/globalStyling'

export const AboutMe = () => {
  return (
    <CardBox selectedColor="#622658" textColor="#E8ADDF">
      <h2>
        <Span>want-to-be</Span> professional web developer with accessibility ambitions and a heart for UI.
      </h2>
      <CardText>
        <h3>How I got started</h3>
        <p>In 2021 I attended the Technigo&apos;s Front-end Bootcamp for 6 months together with 70 other ambitious like-minded.</p>
        <p>I learned how to set up a web site using HTML, CSS and Javascript. Using React & Next.js I fetched data and translated it into a meaningful design. I wrote and read from a database.</p>
        <p>In this portfolio you&apos;ll find some of my projects.</p>
      </CardText>
    </CardBox>
  )
}