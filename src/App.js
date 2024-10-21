import React from 'react'
import { Header } from 'components/Header'
import { AboutMe } from 'components/AboutMe'
import { Tech } from 'components/Tech'
import { Footer } from 'components/Footer'
import { GetInTouch } from 'components/GetInTouch'
import { InnerWrapper, OuterWrapper } from 'components/globalStyling'
import { Project } from 'components/SingleProject'

export const App = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Header />
        <AboutMe />
        <Project />
        <Tech />
        <GetInTouch />
        <Footer />
      </InnerWrapper>
    </OuterWrapper>

  )
}
