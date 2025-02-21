import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return (
    <BannerStyle>
      <div>
        <p>My latest commits:</p>
        <Hidden>
          <p>• Portfolio: added banner on top of page - committed on Feb 17, 2025</p>
          <p>• Portfolio: about me section built and styled - committed on Feb 16, 2025</p>
          <p>• Portfolio: styling desktop view on project page done - committed on Jan 05, 2025</p>
        </Hidden>
      </div>
    </BannerStyle>
  )
}

export default Banner

const BannerStyle = styled.div`
    font-family: "IBM Plex Sans", sans-serif;
    color: #fff;
    height: 50px;
    background: #726021;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    transition: height ease-in-out 1s;
    overflow-y: clip;

    :hover{
      height: 150px;
    }
    
    div {
        margin-top: 14px;
        text-align: center;
        pointer-events: none;
        font-family: "IBM Plex Serif";
        font-style: italic;
    }

    div > div {
      text-align: left;
    }
    
  `

const Hidden = styled.div`
  opacity: 0;
  transition: opacity ease-in-out 1s;

  ${BannerStyle}:hover & {
    opacity: 1;
  }
  `