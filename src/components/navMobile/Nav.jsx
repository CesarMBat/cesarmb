import React from "react";
import Burger from "./Burger";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 1px inset #8e59d7;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-border-box;

  .logo {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0;
    cursor: pointer;
    user-select: none;
  }
`;
const Navbar = ({ onNav, theme, toggleTheme, onChangeLanguage }) => {
  return (
    <Nav>
      <div className="logo">César M Bat</div>
      <Burger
        onNav={onNav}
        theme={theme}
        toggleTheme={toggleTheme}
        onChangeLanguage={onChangeLanguage}
      />
    </Nav>
  );
};

export default Navbar;
