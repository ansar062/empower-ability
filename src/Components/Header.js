import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";

const UserDropdown = styled.div`
  position: relative;
`;

const UserIcon = styled.img`
  width: 30px; /* Adjust the size as needed */
  height: 30px; /* Adjust the size as needed */
  border-radius: 50%;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 1rem;
  display: none;
  z-index: 1000;
  ${UserDropdown}:hover & {
    display: block;
  }
`;

const DropdownLink = styled(NavLink)`
  display: block;
  padding: 0.5rem;

  &:hover {
    color: #008080;
    text-decoration: underline;
  }
`;

const HeaderContainer = styled.header`
  background-color: white;
  color: black;
  padding: 1rem 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const LogoContainer = styled.div`
  flex: 0 0 auto;
`;

const LogoImage = styled.img`
  height: auto;
  max-width: 150px;
`;

const NavigationContainer = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavigationLink = styled(NavLink)`
  color: black;
  margin: 0 1rem;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #008080;
    text-decoration: underline;
  }
`;

const ActiveLinkStyle = styled(NavigationLink)`
  color: #008080;
  border-bottom: 2px solid #008080;
`;

const AuthContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

const LoginRegisterButton = styled(NavLink)`
  color: white;
  background-color: #008080;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 1rem;
  text-decoration: none;
  display: inline-block; /* Ensures the button doesn't take full width */

  &:hover {
    background-color: #006666; /* Darker color on hover */
  }

  /* Apply styles when the button is inside a navigation link */
  &.active {
    background-color: #006666;
  }
`;

const MobileNavContainer = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLinksContainer = styled.div`
  position: absolute;
  top: 70px;
  right: 10px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 1rem;
  z-index: 1000;
  display: ${({ openMenu }) => (openMenu ? "flex" : "none")};
  flex-direction: column;
`;

const MobileNavLink = styled(NavigationLink)`
  display: block;
  padding: 0.5rem;

  &:hover {
    color: #008080;
    text-decoration: underline;
  }
`;

const Header = () => {
  const [hovered, setHovered] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleHover = (link) => {
    setHovered(link);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <NavLink to="/">
          <LogoImage src="/images/logo.png" alt="logo" />
        </NavLink>
      </LogoContainer>
      <NavigationContainer>
        <NavigationLink
          to="/"
          onMouseEnter={() => handleHover("home")}
          onMouseLeave={handleMouseLeave}
          activeStyle={hovered === "home" ? { color: "#008080" } : null}
        >
          Home
        </NavigationLink>
        <NavigationLink
          to="/courses"
          onMouseEnter={() => handleHover("courses")}
          onMouseLeave={handleMouseLeave}
          activeStyle={hovered === "courses" ? { color: "#008080" } : null}
        >
          Courses
        </NavigationLink>
        <NavigationLink
          to="/jobs"
          onMouseEnter={() => handleHover("jobs")}
          onMouseLeave={handleMouseLeave}
          activeStyle={hovered === "jobs" ? { color: "#008080" } : null}
        >
          Jobs
        </NavigationLink>
        <NavigationLink
          to="/blogs"
          onMouseEnter={() => handleHover("blogs")}
          onMouseLeave={handleMouseLeave}
          activeStyle={hovered === "blogs" ? { color: "#008080" } : null}
        >
          Blogs
        </NavigationLink>
        <NavigationLink
          to="/contact"
          onMouseEnter={() => handleHover("contact")}
          onMouseLeave={handleMouseLeave}
          activeStyle={hovered === "contact" ? { color: "#008080" } : null}
        >
          Contact Us
        </NavigationLink>
      </NavigationContainer>

        <LoginRegisterButton to="/login">Log In</LoginRegisterButton>
       


       <MobileNavContainer onClick={toggleMenu}>
        {openMenu ? <CgCloseR size={32} /> : <CgMenu size={32} />}
      </MobileNavContainer>
      <MobileNavLinksContainer openMenu={openMenu}>
        <MobileNavLink to="/" onClick={() => setOpenMenu(false)}>
          Home
        </MobileNavLink>
        <MobileNavLink to="/courses" onClick={() => setOpenMenu(false)}>
          Courses
        </MobileNavLink>
        <MobileNavLink to="/jobs" onClick={() => setOpenMenu(false)}>
          Jobs
        </MobileNavLink>
        <MobileNavLink to="/blogs" onClick={() => setOpenMenu(false)}>
          Blogs
        </MobileNavLink>
        <MobileNavLink to="/contact" onClick={() => setOpenMenu(false)}>
          Contact Us
        </MobileNavLink>
      </MobileNavLinksContainer>
    </HeaderContainer>
  );
};

export default Header;