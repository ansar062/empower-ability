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
      <NavLink to="/">
          <Logo src="/logo.png" alt="logo" />
        </NavLink>
      <UserDropdownMenuContainer>
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
            <DropdownMenu.Item>Edit Your Profile</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <Button color="teal">Logout</Button>
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
                      color="teal"
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
