import React from 'react'
import { AboutMe } from 'components/AboutMe'
import { Tech } from 'components/Tech'
import { HireMe } from 'components/HireMe'
import { SingleProject } from 'components/SingleProject'
import { ProfilePic } from 'components/ProfilePic'
import { GridContainer, GridItemOne, GridItemTwo, GridItemThree, GridItemFour, GridItemFive, GridTitleOne, GridTitleTwo, GridTitleThree } from 'components/globalStyling'

const Home = () => {
  return (
    <GridContainer>
      <GridItemOne>
        <AboutMe />
      </GridItemOne>
      <GridItemTwo>
        <ProfilePic />
      </GridItemTwo>
      <GridTitleOne>Projects.</GridTitleOne>
      <GridItemThree>
        <SingleProject />
      </GridItemThree>
      <GridTitleTwo>A bit about me.</GridTitleTwo>
      <GridItemFour>
        <Tech />
      </GridItemFour>
      <GridTitleThree>Who are you?</GridTitleThree>
      <GridItemFive>
        <HireMe />
      </GridItemFive>
    </GridContainer>
  )
}

export default Home

