import React from 'react'
import styled from 'styled-components'
import { CardBox, CardText } from 'components/globalStyling'

export const Project = () => {
  return (
    <CardBox selectedColor="#113840" textColor="#B4D3D9">
      <StyledDiv>
        <CardText>
          <h4>Project</h4>
          <h5>tags, tags tags</h5>
          <p>text about this project</p>
        </CardText>
        <CardText>
          <p>Image of project</p>
        </CardText>
      </StyledDiv>
    </CardBox>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  font-family:"Uncut Sans";

h4 {
  font-size: 30px;
  font-weight: 700;
}

h5 {
  font-style: italic;
}
`
