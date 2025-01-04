import React from 'react'
import { About } from 'components/About'
import { Tech } from 'components/Tech'
import { GetInTouch } from 'components/GetInTouch'
import { Project } from 'components/SingleProject'
import { ProfilePic } from 'components/ProfilePic'
import { GridContainer, GridItemOne, GridItemTwo, GridItemThree, GridItemFour, GridItemFive, GridTitleOne, GridTitleTwo, GridTitleThree } from 'components/globalStyling'

const Home = () => {
  return (
    <GridContainer>
      <GridItemOne>
        <About />
      </GridItemOne>
      <GridItemTwo>
        <ProfilePic />
      </GridItemTwo>
      <GridTitleOne>Projects.</GridTitleOne>
      <GridItemThree>
        <Project />
      </GridItemThree>
      <GridTitleTwo>A bit about me.</GridTitleTwo>
      <GridItemFour>
        <Tech />
      </GridItemFour>
      <GridTitleThree>Who are you?</GridTitleThree>
      <GridItemFive>
        <GetInTouch />
      </GridItemFive>
    </GridContainer>
  )
}

export default Home

