import React from 'react';
import styled from 'styled-components';
import { FaBell } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import NotificationIcon from '../../Components/NotificationIcon'; 
import { Flex, AlertDialog, Button, DropdownMenu, Avatar } from '@radix-ui/themes';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../store/slices/authSlice';
import { toast } from 'react-toastify';
import axios from 'axios';


const EHeader = () => {
  const {currentUser} = useSelector((state) => state.auth);
const dispatch = useDispatch();
const navigate = useNavigate();
  const logoutHandle = async () => {
    try {
      axios
        .post("http://localhost:8000/logout", "", {
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
          <LogoImage src="/images/logo.png" alt="logo" />
        </Link>
      </LogoContainer>
      <Navigation>
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
          <NavLink to="/chat" activeClassName="active">
            <NavText>Messages</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/eapp" activeClassName="active">
            <NavText>Applications</NavText>
          </NavLink>
        </NavItem>
      </Navigation>
      <RightSection>
        <NotificationButton>
          <NotificationIcon />
        </NotificationButton>
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
`;

const LogoContainer = styled.div`
  margin-right: 20px;
`;

const LogoImage = styled.img`
  width: 130px;
  height: auto;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
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
`;

const NavIcon = styled.div`
  margin-right: 5px;
`;

const NavText = styled.span`
  font-size: 16px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const NotificationButton = styled.div`
  cursor: pointer;
  margin-right: 20px;
`;

const StudentLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #333;
  margin-right: 20px;
`;

const UserIcon = styled.div`
  cursor: pointer;
`;

export default EHeader;
