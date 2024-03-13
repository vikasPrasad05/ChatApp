import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import React, { Suspense, lazy, useState } from 'react'
import { matblack, orange } from '../../constants/color';
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material"
import { useNavigate } from 'react-router-dom';



const SearchDailog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));



const Header = () => {

  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);


  const handleMobile = () => {
    setIsMobile(prev => !prev);
  };


  const openSearch = () => {
    setIsSearch(prev => !prev);
  }

  const openNewGroup = () => {
    setIsNewGroup(prev => !prev);
  }

  const openNotification = () => {
    setIsNotification(prev => !prev);

  }

  const navigateToGroup = () => navigate("/groups")

  const logoutHandler = () => {
    console.log("logout")
  }


  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{
          bgcolor: "black",
        }} >

          <Toolbar>

            <Typography variant="h6"
              sx={{
                display: { xs: "none", sm: "block" }
              }}>
              ChatHub

            </Typography>


            <Box sx={{
              display: { xs: "block", sm: "none" }
            }}>
              <IconButton color="inherit" onClick={handleMobile}>
                < MenuIcon />
              </IconButton>

            </Box>

            <Box sx={{ flexGrow: 1, }} />
            <Box>

              <IconBtn
                title={"search user"}
                icon={<SearchIcon />}
                onclick={openSearch}
              />



              <IconBtn
                title={"New Group "}
                icon={<AddIcon />}
                onclick={openNewGroup}
              />


              <IconBtn
                title={"manage Group"}
                icon={<GroupIcon />}
                onclick={navigateToGroup}
              />


              <IconBtn
                title={"Motifications"}
                icon={<NotificationsIcon />}
                onclick={openNotification}
              />

              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onclick={logoutHandler}
              />

            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {
        isSearch && (
          <Suspense allback={<Backdrop open />}>
            <SearchDailog />
          </Suspense>
        )    
      }

      {
        isNotification && (
          <Suspense allback={<Backdrop open />}>
            <NotificationDialog />
          </Suspense>
        )
      }

      {
        isNewGroup && (
          <Suspense allback={<Backdrop open />}>
            <NewGroupDialog />
          </Suspense>
        )
      }


    </>
  );


};


const IconBtn = ({ title, icon, onclick }) => {
  return (
    <Tooltip title={title}>
      <IconButton
        color="inherit"
        size="large"
        onClick={onclick}>

        {icon}
      </IconButton>
    </Tooltip>

  )

}

export default Header;