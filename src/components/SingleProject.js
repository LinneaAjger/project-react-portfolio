import React from 'react'
import styled from 'styled-components'
import projectImg from './images/projectImg.png'

export const Project = () => {
  return (
    <ProjectBox>
      <StyledDiv>
        <div>
          <h4>Projects.</h4>
          <h5>MovieTime</h5>
          <h6>tags, tags tags</h6>
          <p>text about this project</p>
        </div>
        <ImgBox />
      </StyledDiv>
    </ProjectBox>
  )
}

const ImgBox = styled.div`
  background: linear-gradient(rgb(17,56,64,0), rgb(17,56,64,0), rgb(17,56,64,0.9), rgb(17,56,64,1)), url(${projectImg});
  background-size: cover;
  width: 70%;
  border-radius: 10px;
  opacity: 0.8;
  box-shadow: rgba(137, 216, 216, 0.05) 0px -60px 60px 0px
`

const ProjectBox = styled.div`
  display: flex;
  gap: 50px;
  background-color: #113840;
  color: #B4D3D9;
  min-height: 300px;

`

const StyledDiv = styled.div`
  font-family:"Uncut Sans";
  width: 100%;
  display: flex;
  justify-content: space-between;

img {
  border-radius: 10px;
}
`