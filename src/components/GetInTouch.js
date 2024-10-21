import React from 'react'
import styled from 'styled-components/macro'
import { CardBox } from './globalStyling'

export const GetInTouch = () => {
  return (
    <CardBox selectedColor="#185757" textColor="#89D8D8">
      <TechContent> Lorem ipsum dolor sit amet</TechContent>
    </CardBox>
  )
}
export const TechContent = styled.p`
    text-align: center;
    `