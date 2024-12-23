import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { TitleTertiary, TitleQuaternary, SingleTag, GridDiv } from './globalStyling'

export const Projects = () => {
  const [projectsList, setProjectsList] = useState([])

  const FetchProjects = () => {
    fetch('https://api.github.com/users/linneaajger/repos')
      .then((res) => res.json())
      .then((data) => setProjectsList(data))
  }
  // To filter the array of projects
  const filteredProjects = projectsList.filter((item) => !item.name.includes('portfolio'))
  const secondaryFiltering = filteredProjects.filter((item) => !item.name.includes('practice'))

  // Filtering my starred projects to make them the featured projects
  const FeaturedProjects = secondaryFiltering.filter((project) => project.stargazers_count === 1)
  const OtherProjects = secondaryFiltering.filter((project) => project.stargazers_count === 0)

  useEffect(() => {
    FetchProjects()
  }, [])

  return (
    <>
      <GridDiv>
        {FeaturedProjects.map((project) => (
          <ProjectCard key={project.id}>
            <StyledDescriptionLink target="_blank" rel="noopener noreferrer" href={project.homepage}>
              <Overlay>
                <FeaturedProjectsImg width="100%" src={`https://raw.githubusercontent.com/linneaajger/${project.name}/master/thumbnail.png`} alt="thumbnail of project" />
                <OverlayText>
                  <h4>{project.name.replaceAll('-', ' ').replaceAll('project', '')}</h4>
                </OverlayText>
              </Overlay>

              <ProjectDescription>
                <TitleQuaternary>{project.name.replaceAll('-', ' ')}</TitleQuaternary>
                <p>{project.description}</p>
              </ProjectDescription>
            </StyledDescriptionLink>
            <StyledLink target="_blank" rel="noopener noreferrer" href={project.html_url}>👉 Github</StyledLink>

            <Tags>
              {// eslint-disable-next-line react/no-array-index-key
              } {project.topics.map((tag, index) => <SingleTag key={index}>{tag}</SingleTag>)}
            </Tags>
          </ProjectCard>
        ))}
      </GridDiv>
      <div>
        <TitleTertiary selectedColor="#551A8B" marginTop="10%">other projects</TitleTertiary>
        {OtherProjects.reverse().map((project) => (
          <ProjectCard key={project.id}>
            <StyledDescriptionLink target="_blank" rel="noopener noreferrer" href={project.homepage}>
              <ProjectDescription>
                <TitleQuaternary>{project.name.replaceAll('-', ' ').replaceAll('project', '')}</TitleQuaternary>
                <p>{project.description} <span> &gt;&gt;</span></p>
              </ProjectDescription>
            </StyledDescriptionLink>
            <StyledLink target="_blank" rel="noopener noreferrer" href={project.html_url}>👉 Github</StyledLink>

            <Tags>
              {// eslint-disable-next-line react/no-array-index-key
              } {project.topics.map((tag, index) => <SingleTag key={index}>{tag}</SingleTag>)}
            </Tags>
          </ProjectCard>
        ))}
      </div>
    </>
  )
}

const ProjectCard = styled.div`
margin-bottom: 2rem;
`

export const StyledDescriptionLink = styled.a`
  text-decoration: none;
  color: black;
`

const StyledLink = styled.a`
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color:#551A8B;
  /* color:#285841; */

  &:hover {
        text-decoration: underline;
    }
`

const ProjectDescription = styled.div`
margin: 1rem 0rem 0.5rem 0rem;

a{
  text-decoration: none;
}

span {
  color:#7260c0;
  font-weight: 700;
}

&:hover {
        text-decoration: underline;
        text-decoration-color: #551A8B;
    }

`
const Tags = styled.div`
    display: flex;
    margin: 0.5rem 0rem 0rem 0rem;
    flex-wrap: wrap;
`
export const FeaturedProjectsImg = styled.img`
    width: ${(props) => (props.width)};
    border-radius: 10px;
  `

const Overlay = styled.div`
  position: relative;

  & :hover {
      opacity: 0;
    }
`
const OverlayText = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 3px;
    background-color: #484848a1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    transition: 0.3s ease-in-out;

  h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: white;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
`

