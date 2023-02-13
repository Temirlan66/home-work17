import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NavBar = () => {
  return (
    <NavBarContainer>
      <StyledUl>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "black" : "",
              textDecoration: isActive ? "underline orange 5px" : "",
            })}
            to="submitted"
          >
            Subitted
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "black" : "",
              textDecoration: isActive ? "underline orange 5px" : "",
            })}
            to="waiting"
          >
            Waiting
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "black" : "",
              textDecoration: isActive ? "underline orange 5px" : "",
            })}
            to="late"
          >
            Late
          </NavLink>
        </li>
      </StyledUl>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  width: 1130px;
  height: 90px;
  background-color: #3faa3f;
  margin-top: 200px;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px 10px;
  gap: 120px;
  list-style: none;
  font-size: 20px;


  a {
    color: white;
    text-decoration: none;
    
  }
`;
export default NavBar;
