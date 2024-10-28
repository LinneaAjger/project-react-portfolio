import React from 'react';
import styled from 'styled-components/macro';

export const Header = () => {
  return (
    <HeaderContent>
      <ul>
        <div>
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
        </div>
        <li>
          <h1>linnea ajger</h1>
        </li>
        <div>
          <li>
            <a>
              linked in
            </a>
          </li>
        </div>
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
}

div {
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
}

  @media (min-width: 1025px) {
  }
`;
