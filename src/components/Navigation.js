import React from 'react';
import { NavLink } from 'react-router';
import styled from 'styled-components/macro';

export const Navigation = () => {
  return (
    <HeaderContent>
      <ul>
        <FirstLinks>
          <li>
            <NavLink to="/projects">
                projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              about me
            </NavLink>
          </li>
        </FirstLinks>
        <li>
          <NavLink className="home-link" to="/">
            linnea ajger
          </NavLink>
        </li>
        <LastLink>
          <li>
            <NavLink>
              linkedin
            </NavLink>
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
  border: 1px solid #DD9FD3;
  border-radius: 40px;
  padding: 20px 30px;
  color: #DD9FD3;
  text-decoration: none;
  font-size: 20px;
  transition: background-color 0.5s ease-in-out;
}

a:hover{
 color: #113840;
 background-color: #DD9FD3;
}

div {
  width: 33%;
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