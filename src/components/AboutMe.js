/* eslint-disable max-len */
import React from 'react'
import { CardBox, CardTitle, CardText } from 'components/globalStyling'
import styled from 'styled-components/macro';
// import profile4 from './images/profile4.png';

export const AboutMe = () => {
  return (
    <BioBox>
      <CardBox selectedColor="#622658" textColor="#E8ADDF">
        <CardTitle>
          Hi! I&apos;m a frontend developer with a background as a physiotherapist.
        </CardTitle>
        <CardText>I&apos;ve worked over 6 years in a a mulitprofessional team rehabilitating people with disabilites. For me teamwork is key and I want to create products that looks nice, but also works great for everyone!</CardText>
      </CardBox>
      <ImgBox>
        {/* <ProfilePicture src={profile4} alt="profile" /> */}
      </ImgBox>
    </BioBox>
  )
}

const BioBox = styled.div`
display:flex;
justify-content: space-between;
`

const ImgBox = styled.div`
  background-image: url("/static/media/profile4.60c11b4803c3a019d7cb.png");
    /* background-size: auto; */
    width: 50%;
`
// const ProfilePicture = styled.img`
//     position: relative;
//     bottom: -60px;
//     object-fit: contain;

/* @media (min-width: 668px) {
        max-height: 330px;
//         max-width: 437px;  } */
// `