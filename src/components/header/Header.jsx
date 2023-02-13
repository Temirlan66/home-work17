import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <StyledNav >
        <StyledUl>
          <li>
            {" "}
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "black" : "",
                textDecoration: isActive ? "underline orange 5px" : "",
              })}
              to="materials"
            >
              Materials
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "black" : "",
                textDecoration: isActive ? "underline orange 5px" : "",
              })}
              to="students"
            >
              Students
            </NavLink>
          </li>

          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "black" : "",
                textDecoration: isActive ? "underline orange 5px" : "",
              })}
              to="raitings"
            >
              Raitings
            </NavLink>
          </li>
        </StyledUl>
      </StyledNav>
    </Container>
  );
};

const Container = styled.div`
  height: 70px;
  background-color: #3737c9;
`;
const StyledNav = styled.nav`
  color: white;
`;
const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
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
export default Header;
