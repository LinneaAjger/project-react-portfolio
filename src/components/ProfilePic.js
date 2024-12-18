import React from 'react'

import styled from 'styled-components/macro';
import profile4 from './images/profile4.png';

export const ProfilePic = () => {
  return (
    <ImgBox>
      <ProfilePicture src={profile4} alt="profile" />
    </ImgBox>
  )
}

const ImgBox = styled.div`
    width: 50%;
`
const ProfilePicture = styled.img`
    position: absolute;
    bottom: -50px;

@media (min-width: 668px) {
        max-height: 390px;
      }
 `