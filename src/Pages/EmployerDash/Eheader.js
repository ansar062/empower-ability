import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBell, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import NotificationIcon from '../../Components/NotificationIcon'; 
import { Flex, AlertDialog, Button, DropdownMenu, Avatar } from '@radix-ui/themes';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../store/slices/authSlice';
import { toast } from 'react-toastify';
import axios from 'axios';

const EHeader = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

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
        <Link to="/">
          <LogoImage src="/logo.png" alt="logo" />
        </Link>
      </LogoContainer>
      <MobileMenuToggle onClick={() => setShowMenu(!showMenu)}>
        <FaBars />
      </MobileMenuToggle>
      <Navigation showMenu={showMenu}>
        <NavItem>
          <NavLink to="/edash" activeClassName="active">
            <NavText>Dashboard</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/epostjobs" activeClassName="active">
            <NavText>Post a Job</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/eapp" activeClassName="active">
            <NavText>Applications</NavText>
          </NavLink>
        </NavItem>
      </Navigation>
      <RightSection>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <div>
              <Avatar
                // src={`${currentUser.profileurl}`}
                fallback={`${currentUser.firstname[0]}${currentUser.lastname[0]}`}
              />
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>{`${currentUser.firstname} ${currentUser.lastname}`}</DropdownMenu.Item>
            <DropdownMenu.Item>{currentUser.role}</DropdownMenu.Item>
            <DropdownMenu.Separator />
            {currentUser.role === "Hirer" && (
              <DropdownMenu.Item>
                <a href="/myjobs">My Jobs</a>
              </DropdownMenu.Item>
            )}

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
      </RightSection>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 10px 20px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const LogoContainer = styled.div`
  margin-right: 20px;
`;

const LogoImage = styled.img`
  width: 130px;
  height: auto;
`;

const MobileMenuToggle = styled.div`
  display: none;
  cursor: pointer;
  padding: 10px;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 2.2%;
    right: 17%;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: ${({ showMenu }) => (showMenu ? '0' : '-100%')};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
    width: 70%;
    background: #fff;
    border-radius: 10px;
    padding: 1em;
    transition: left 0.3s ease;
  }
`;

const NavItem = styled.div`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
  &:hover {
    color: teal;
  }
  &.active {
    color: teal;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }  &:hover {
    color: teal;
  text-decoration: underline;
  }
`;

const NavText = styled.span`
  font-size: 16px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export default EHeader;
