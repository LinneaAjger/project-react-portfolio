import React from 'react'
import { Header } from 'components/Header'
import { AboutMe } from 'components/AboutMe'
import { Tech } from 'components/Tech'
import { Footer } from 'components/Footer'
import { GetInTouch } from 'components/GetInTouch'
import { InnerWrapper, OuterWrapper, GridContainer, GridItemOne, GridItemTwo, GridItemThree, GridItemFour, GridItemFive } from 'components/globalStyling'
import { Project } from 'components/SingleProject'

export const App = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Header />
        <GridContainer>
          <GridItemOne>
            <AboutMe />
          </GridItemOne>
          <GridItemTwo>
            <p>photo</p>
          </GridItemTwo>
          <GridItemThree>
            <Project />
          </GridItemThree>
          <GridItemFour>
            <Tech />
          </GridItemFour>
          <GridItemFive>
            <GetInTouch />
          </GridItemFive>
        </GridContainer>
        <Footer />
      </InnerWrapper>
    </OuterWrapper>

  )
}
