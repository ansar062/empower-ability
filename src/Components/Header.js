import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import {
  Avatar,
  DropdownMenu,
  Button,
  AlertDialog,
  Flex,
  Dialog,
} from "@radix-ui/themes";
import axios from "axios";
import { logoutUser } from "../store/slices/authSlice";
import { toast } from "react-toastify";

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

  @media (max-width: 768px) {
     height: auto;
  max-width: 100px;
  margin-left: -20px;
  }
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
    background-color: #006666; 
  }

  /* Apply styles when the button is inside a navigation link */
  &.active {
    background-color: #006666;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem; 
    font-size: 0.5rem;
    margin-left: 6rem; 
    margin-right: -15px;
  border-radius: 20px;
  }
`;


const MobileNavContainer = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin-right:-20px;
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
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHover = (link) => {
    setHovered(link);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const logoutHandle = async () => {
    try {
      axios
        .post("https://empowerabilitybackend56dcdfs4q43srd.vercel.app/logout", "", {
          withCredentials: true,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          if (data.success === false) {
            toast(data.message);
            return;
          }
          localStorage.removeItem("token");
          dispatch(logoutUser());
          toast(data.message);
          navigate("/");
        });
    } catch (err) {
      toast(err);
    }
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <NavLink to="/">
          <LogoImage src="/logo.png" alt="logo" />
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

      {currentUser ? (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <div>
              <Avatar
                src={`${currentUser.profileurl}`}
                fallback={`${currentUser.firstname[0]}${currentUser.lastname[0]}`}
              />
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <Link to={currentUser.role === 'client' ? 'edit-freelancer-profile' : currentUser.role === 'employer' ? 'unauthorized' : 'tutor'}><DropdownMenu.Item>{`${currentUser.firstname} ${currentUser.lastname}`}</DropdownMenu.Item></Link>
            <Link to={currentUser.role === 'client' ? 'sdashboard' : currentUser.role === 'employer' ? 'edash' : 'tdashboard'}><DropdownMenu.Item>{currentUser.role}</DropdownMenu.Item></Link>
            <DropdownMenu.Separator />
            

            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                <DropdownMenu.Separator />
                <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>

            <DropdownMenu.Separator />
            <DropdownMenu.Item>Share</DropdownMenu.Item>
            <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <Button color="red">Logout</Button>
              </AlertDialog.Trigger>
              <AlertDialog.Content maxWidth="450px">
                <AlertDialog.Title>Logout</AlertDialog.Title>
                <AlertDialog.Description size="2">
                  Are you sure? This application will no longer be accessible
                  and any existing sessions will be expired.
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                  <AlertDialog.Cancel>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                    <Button
                      variant="solid"
                      color="red"
                      onClick={() => logoutHandle()}
                    >
                      Logout
                    </Button>
                  </AlertDialog.Action>
                </Flex>
              </AlertDialog.Content>
            </AlertDialog.Root>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      ) : (
        <LoginRegisterButton to="/login">Log In</LoginRegisterButton>
      )}

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
