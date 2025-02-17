import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { ProjectText } from './globalStyling'

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

  console.log(FeaturedProjects)

  useEffect(() => {
    FetchProjects()
  }, [])

  return (
    <>
      <ProjectHeading>projects.</ProjectHeading>
      <GridDiv>
        {FeaturedProjects.map((project) => (
          <ProjectCard key={project.id}>
            <a target="_blank" rel="noopener noreferrer" href={project.homepage}>
              <div>
                <FeaturedProjectsImg width="100%" src={`https://raw.githubusercontent.com/linneaajger/${project.name}/master/thumbnail.png`} alt="thumbnail of project" />
              </div>
            </a>
            <ProjectText>
              <a target="_blank" rel="noopener noreferrer" href={project.homepage}>
                <h5>{project.name.replaceAll('-', ' ')}</h5>
              </a>
              <Tags>
                {// eslint-disable-next-line react/no-array-index-key
                } {project.topics.map((tag, index) => <SingleTag key={index}>#{tag} </SingleTag>)}
              </Tags>
              <p>{project.description}</p>
            </ProjectText>
          </ProjectCard>
        ))}
      </GridDiv>
      <OtherProjectsDiv>
        <ProjectHeading>other projects.</ProjectHeading>
        {OtherProjects.reverse().map((project) => (
          <ProjectCard key={project.id}>
            <ProjectText>
              <a target="_blank" rel="noopener noreferrer" href={project.homepage}>
                <h5>{project.name.replaceAll('-', ' ').replaceAll('project', '')}</h5>
              </a>
              <Tags>
                {// eslint-disable-next-line react/no-array-index-key
                } {project.topics.map((tag, index) => <SingleTag key={index}>#{tag}</SingleTag>)}
              </Tags>
              <p>{project.description}</p>
            </ProjectText>
          </ProjectCard>
        ))}
      </OtherProjectsDiv>
    </>
  )
}

const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 70px;    
    align-items: start;
    font-family: "IBM Plex Sans", sans-serif;

    a {
      text-decoration: none;
      color: #b4d3d9;
    }
    a:hover {
        text-decoration: underline;
    }

    @media (min-width: 840px) {
    grid-template-columns: repeat(2, 1fr);
    }
    `

const ProjectCard = styled.div`
display: flex;
flex-direction: column;
color: #b4d3d9;
`

export const FeaturedProjectsImg = styled.img`
    width: ${(props) => (props.width)};
    border-radius: 10px;
  `

const Tags = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;

    p {
      margin: 0px 5px 0px 0px;
    }
`

const SingleTag = styled.h6`
  margin-right: 15px;
`

const OtherProjectsDiv = styled(GridDiv)`
grid-template-columns: 1fr;
gap: 20px;

a {
  color: #b4d3d9;
  text-decoration: none;

}
`

const ProjectHeading = styled.h4`
text-align: left;
margin: 80px 0px 60px 0px;
font-size: 20px;

@media (min-width: 840px) {
  font-size: 30px;
}
`