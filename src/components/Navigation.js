import React, { useState } from 'react';
import { NavLink } from 'react-router';
import styled from 'styled-components/macro';
import closingBtn from './images/close_btn.svg'
import hamburger from './images/hamburger.svg'

export const Navigation = () => {
  const [click, setClick] = useState(false)

  // function to toggle the sliding navbar
  const handleClick = () => setClick(!click)
  console.log(click)
  return (
    <HeaderContent>
      <ul>
        <MenuBtn type="button" onClick={handleClick}>
          <img className={click ? 'burger-hidden' : 'burger-show'} src={hamburger} alt="open menu" />
        </MenuBtn>
        <div className={`menu ${click ? 'menu-show' : 'menu-hidden'}`}>
          <MenuBtn type="button" onClick={handleClick}>
            <img src={closingBtn} alt="closing menu" />
          </MenuBtn>
          <li>
            <NavLink to="/projects" onClick={handleClick}>
                projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleClick}>
              about me
            </NavLink>
          </li>
        </div>
        <DesktopNav>
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
        </DesktopNav>
        <NavLink className="home-link" to="/">
            linnea ajger
        </NavLink>
        <LastLink>
          <li>
            <NavLink to="https://www.linkedin.com/in/linneaajger" aria-label="link to Linneas linkedin-profile">
              linkedin
            </NavLink>
          </li>
        </LastLink>
      </ul>
    </HeaderContent>
  );
};

const HeaderContent = styled.nav`
color:#DD9FD3;
margin-bottom: 60px;

ul {
  list-style: none;
  padding: 20px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li {
  display: inline-block;
}

a {
  text-wrap: nowrap;
  color: #DD9FD3;
  text-decoration: none;
}

img {
  height: 20px;
}


  @media (min-width: 668px) {
    margin-bottom: 60px;

    ul {
      list-style: none;
      padding: 20px 0px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    li {
      margin-right: 15px; /* add spacing between items */
    }
    a {
      font-size: 15px;
      transition: background-color 0.5s ease-in-out;
      padding: 10px 15px;
      border-radius: 20px;
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

    
  }
  @media (min-width: 840px) {

    ul {
        list-style: none;
        padding: 40px 0px;
    }

    a {
      font-size: 20px;
      padding: 15px;
      border-radius: 40px;
    }
  }
`

const DesktopNav = styled.div`
display: none;
  
  @media (min-width: 668px) {
    display: flex;
    justify-content: flex-end;
}
 `

const LastLink = styled.div`
  justify-content: flex-start;
`

const MenuBtn = styled.button`
background: none;
border: none;
padding: 0;
display: flex;
width: 59px;

 @media (min-width: 668px) {
  display: none;
}`