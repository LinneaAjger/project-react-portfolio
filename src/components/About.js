/* eslint-disable max-len */
import React from 'react'
import { CardBox, Span } from 'components/globalStyling'

export const About = () => {
  return (
    <CardBox selectedColor="#622658" textColor="#E8ADDF">
      <h2>
        <Span>Hi! I&apos;m a frontend developer</Span> with a background as a physiotherapist.
      </h2>
      <div>
        <h3>How I got started</h3>
        <p>I&apos;ve worked over 6 years in a a mulitprofessional team rehabilitating people with disabilites. For me teamwork is key and I want to create products that looks nice, but also works great for everyone!</p>
      </div>
    </CardBox>
  )
}

// const BioBox = styled.div`
// display:flex;
// justify-content: space-between;
// `

