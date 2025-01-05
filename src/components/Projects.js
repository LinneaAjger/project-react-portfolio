import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

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
            <a target="_blank" rel="noopener noreferrer" href={project.homepage}>
              <Overlay>
                <FeaturedProjectsImg width="100%" src={`https://raw.githubusercontent.com/linneaajger/${project.name}/master/thumbnail.png`} alt="thumbnail of project" />
                <OverlayText>
                  <h5>{project.name.replaceAll('-', ' ').replaceAll('project', '')}</h5>
                </OverlayText>
              </Overlay>
            </a>
            <ProjectDescription>
              <a target="_blank" rel="noopener noreferrer" href={project.homepage}>
                <h5>{project.name.replaceAll('-', ' ')}</h5>
              </a>
              <Tags>
                {// eslint-disable-next-line react/no-array-index-key
                } {project.topics.map((tag, index) => <SingleTag key={index}>{tag} </SingleTag>)}
              </Tags>
              <p>{project.description}</p>
            </ProjectDescription>
            <GithubLink target="_blank" rel="noopener noreferrer" href={project.html_url}>👉 Github</GithubLink>
          </ProjectCard>
        ))}
      </GridDiv>
      <OtherProjectsDiv>
        <h3>other projects</h3>
        {OtherProjects.reverse().map((project) => (
          <ProjectCard key={project.id}>
            <ProjectDescription>
              <a target="_blank" rel="noopener noreferrer" href={project.homepage}>
                <h5>{project.name.replaceAll('-', ' ').replaceAll('project', '')}</h5>
              </a>
              <Tags>
                {// eslint-disable-next-line react/no-array-index-key
                } {project.topics.map((tag, index) => <SingleTag key={index}>{tag}</SingleTag>)}
              </Tags>
              <p>{project.description}</p>
            </ProjectDescription>
            <a target="_blank" rel="noopener noreferrer" href={project.html_url}>👉 Github</a>
          </ProjectCard>
        ))}
      </OtherProjectsDiv>
    </>
  )
}

const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: start;
    font-family: "IBM Plex Sans", sans-serif;

    a {
      text-decoration: none;
      color: #b4d3d9;
    }
    a:hover {
        text-decoration: underline;
    }

    p {
      margin: 0px 0px 20px 0px;
      color: #b4d3d9;
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

const ProjectDescription = styled.div`
a{
  text-decoration: none;
}


&:hover {
        text-decoration: underline;
        text-decoration-color: #551A8B;
    }

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
bottom: 0px;
background-color: #38727eeb;
display: flex;
align-items: center;
justify-content: space-around;
border-radius: 10px;
transition: 0.3s ease-in-out;

h4 {
text-transform: uppercase;
}
`
const Tags = styled.div`
display: flex;
flex-direction: row;


    p {
      margin: 0px 5px 0px 0px;
    }
`

const SingleTag = styled.h6`
  padding: 0px 5px 0px 0px;
  width: fit-content;
  white-space: nowrap;
  background-color: #146767;
  padding: 5px 15px;
  border-radius: 5px;
  margin-right: 15px;
`

const GithubLink = styled.a`
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  font-style: italic;
`

const OtherProjectsDiv = styled(GridDiv)`
grid-template-columns: 1fr;
color: #b4d3d9;

a {
  color: #b4d3d9;
  text-decoration: none;

}
`