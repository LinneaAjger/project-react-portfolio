import React from 'react';
import styled from 'styled-components/macro';

export const Header = () => {
  return (
    <HeaderStyling>
      <HeaderContent>
        <h1>linnea ajger</h1>
        <Linkbox>
          <a>
            projects
          </a>
          <a>
            about me
          </a>
          <a>
            linked in
          </a>
        </Linkbox>
      </HeaderContent>
    </HeaderStyling>
  );
};

const HeaderStyling = styled.div`
 h1{
}

  @media (min-width: 1025px) {
  }
`;

const Linkbox = styled.div`
 


  h1 {
    font-size: 1rem;
    line-height: 1.4rem;
  }

  @media (min-width: 668px) {
    width: 100%;
  }
`

const HeaderContent = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 880px;
  position: relative;
  color:#DD9FD3;


  @media (min-width: 1025px) {
  }
`;
