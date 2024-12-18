import React from 'react'
import { About } from 'components/About'
import { Tech } from 'components/Tech'
import { GetInTouch } from 'components/GetInTouch'
import { Project } from 'components/SingleProject'
import { ProfilePic } from 'components/ProfilePic'
import { GridContainer, GridItemOne, GridItemTwo, GridItemThree, GridItemFour, GridItemFive } from 'components/globalStyling'

const Home = () => {
  return (
    <GridContainer>
      <GridItemOne>
        <About />
      </GridItemOne>
      <GridItemTwo>
        <ProfilePic />
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
  )
}

export default Home