import React from 'react';
import styled from 'styled-components/macro';

export const Header = () => {
  return (
    <HeaderContent>
      <ul>
        <FirstLinks>
          <li>
            <a>
                projects
            </a>
          </li>
          <li>
            <a>
              about me
            </a>
          </li>
        </FirstLinks>
        <li>
          <h1>linnea ajger</h1>
        </li>
        <LastLink>
          <li>
            <a>
              linked in
            </a>
          </li>
        </LastLink>
      </ul>
    </HeaderContent>
  );
};

const HeaderContent = styled.div`
color:#DD9FD3;
margin-bottom: 60px;

 ul {
  list-style: none;
  padding: 60px 0px;
  width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li {
  display: inline-block;
  margin-right: 15px; /* add spacing between items */
}
a {
  border: 1px solid rgba(221, 159, 211, 0.3);
  border-radius: 40px;
  padding: 20px 30px;
}

div {
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
}

h1 {
  width: max-content;
}

  @media (min-width: 1025px) {
  }
`;

const FirstLinks = styled.div`
  justify-content: flex-end;

`

const LastLink = styled.div`
  justify-content: flex-start;

`