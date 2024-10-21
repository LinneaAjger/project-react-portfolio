import React from 'react'
import { IconGroup } from './globalStyling'
import { Icons } from './Icons'

export const ForMore = () => {
  return (
    <IconGroup
      justifyContent="space-evenly">
      <Icons
        color="#ffffff"
        iconWidth="23px"
        iconMargin="19px"
        boxWidth="60px"
        boxHeight="60px"
        linkWidth="130px"
        linkedin="Linkedin"
        github="Github"
        stackOverflow="Stack Overflow" />
    </IconGroup>

  )
}
