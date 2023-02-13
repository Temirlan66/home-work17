import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const SideBar = () => {
  return (
    <SideBarContainer>
      <LogoText>LOGO</LogoText>
      <StyledUl>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "white" : "",
              background: isActive ? "purple 100px" : "",
            })}
            to="/courses/materials"
          >
            Courses
          </NavLink>
        </li>

        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "white" : "",
              background: isActive ? "purple" : "",
            })}
            to="/anounements"
          >
            Anounements
          </NavLink>
        </li>

        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "white" : "",
              background: isActive ? "purple " : "",
            })}
            to="/natifications"
          >
            Natifications
          </NavLink>
        </li>

        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "white" : "",
              background: isActive ? "purple" : "",
            })}
            to="/shedule"
          >
            Shedule
          </NavLink>
        </li>
      </StyledUl>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  position: fixed;
  width: 250px;
  height: 900px;
  background-color: #ccc3c3;
`;

const LogoText = styled.h1`
  font-size: 30px;
  color: purple;
  text-align: center;
`;
const StyledUl = styled.ul`
  margin-top: 40px;
  width: 250px;
  height: 100px;
  background-color: white;
  text-align: start;
  
  li {
    list-style: none;
    font-size: 20px;
  }

  a{
    text-decoration: none;
    color: #3838b9;
    display: block;

  }
`;
export default SideBar;
