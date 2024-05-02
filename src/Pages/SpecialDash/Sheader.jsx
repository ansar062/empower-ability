import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBell, FaUser } from 'react-icons/fa'; 
import {Alertbox, AlertDialog, Flex, Button, DropdownMenu, Avatar} from '@radix-ui/themes';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { logoutUser } from "../../store/slices/authSlice";


const HeaderContainer = styled.div`
  position: fixed; /* Fix the position */
  top: 0; /* Position at the top of the viewport */
  width: 100%; /* Take up the full width */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: white; 
  z-index: 999; /* Ensure the header appears above other content */
`;

const Logo = styled.img`
  width: 120px;
  height: 50px;
`;

const SearchBar = styled.input`
  width: 300px;
  height: 17px;
  border-radius: 5px;
  border: 1px solid #ccc; /* Add a border */
  padding: 0.5rem;
  font-size: 1rem;
`;

const NotificationIcon = styled(FaBell)`
  font-size: 1.1rem;
  cursor: pointer;
`;

const UserDropdownMenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right:70px;
  gap: 1.5rem; /* Adjust the gap between the notification icon and the user dropdown menu */
`;

const Header = () => {
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
      <NavLink to="/">
          <Logo src="/images/logo.png" alt="logo" />
        </NavLink>
      <SearchBar type="text" placeholder="Search..." />
      <UserDropdownMenuContainer>
        <NotificationIcon />
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
      </UserDropdownMenuContainer>
    </HeaderContainer>
  );
};

export default Header;
