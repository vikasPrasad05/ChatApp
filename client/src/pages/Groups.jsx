import React, { Suspense, lazy, memo, useState } from 'react'
import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import {
  Add as AddIcon,
  KeyboardBackspace as BackspaceIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  Menu as MenuIcon
} from "@mui/icons-material";
import { bgGradient, matblack } from '../constants/color';
import { useNavigate, useSearchParams } from "react-router-dom"
import { Link } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { samepleChats, sampleUsers } from "../constants/sampleData";
import { useEffect } from 'react';
import UserItem from '../components/shared/UserItem';


const ConfirmDeleteDialog = lazy(() => import("../components/dialog/ConfirmDeleteDialog"));

const AddMemberDialog = lazy(() => import("../components/dialog/AddMemberDialog"));



const isAddMember = false;

const Groups = () => {

  const chatId = useSearchParams()[0].get("group");
  const navigate = useNavigate();



  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false)
  const [confirmDeleteDialog, setconfirmDeleteDialog] = useState(false)
  const [groupName, setGroupName] = useState("")
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("")




  const navigateBack = () => {
    navigate("/");
  };


  const handleMobile = () => {
    setisMobileMenuOpen((prev) => !prev);
  };


  const handleMobileClose = () => setisMobileMenuOpen(false);

  const updateGroupName = () => {
    setIsEdit(false)
    console.log(groupNameUpdatedValue)
  };


  const openConfirmDeleteHandler = () => {
    setconfirmDeleteDialog(true);
    console.log("Delete Group");
  }

  const closeConfirmDeleteHandler = () => {
    setconfirmDeleteDialog(false)

  }

  const openAddMemberHandler = () => {
    console.log("Add member")

  }

  const deleteHandler = () => {
    console.log("Dlete Handler");
    closeConfirmDeleteHandler();
  }


  const removeMemberHandler = (id) => {
    console.log("Remove Member", id)
  }

  useEffect(() => {
    if (chatId) {
      setGroupName(`Group Name ${chatId}`);
      setGroupNameUpdatedValue(`Group Name ${chatId}`);
    }

    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    }
  }, [chatId])



  const IconBtns = (
    <>
      <Box sx={{
        display: {
          xs: "block",
          sm: "none",
          position: "fixed",
          right: "1rem",
          top: "2rem",

        },
      }}>

        <IconButton onClick={handleMobile} >
          <MenuIcon />
        </IconButton>
      </Box>

      <Tooltip title="back" >
        <IconButton sx={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          color: "white",
          bgcolor: "rgba(0,0,0,0.8)",
          ":hover": {
            bgcolor: matblack,
          }
        }}
          onClick={navigateBack}
        >
          <BackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  )




  const GroupName =
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      padding={"3rem"}
    >

      {isEdit ? (
        <>
          <TextField value={groupNameUpdatedValue} onChange={e => setGroupNameUpdatedValue(e.target.value)} />
          <IconButton onClick={updateGroupName}>
            <DoneIcon />

          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4" >{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}><EditIcon /></IconButton>
        </>
      )}
    </Stack>


  const ButtonGroup = (
    <Stack direction={{
      sm: "row",
      xs: "column-reverse",
    }}
      spacing={"1rem"}
      p={{
        sm: "1rem",
        xs: "0",
        md: "1rem 4rem",
      }}

    >
      <Button
        size="large"
        color="error"
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={openConfirmDeleteHandler}
      >Delete Group</Button>

      <Button
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={openAddMemberHandler}
      >Add Member</Button>
    </Stack>
  );


  return (
    <Grid container height={"100vh "} >
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          
        }}
        sm={4}

      >
        <GroupsList myGroups={samepleChats} chatId={chatId} />
      </Grid>


      <Grid item xs={12} sm={8} sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        padding: "1rem 3rem",
      }} >


        {IconBtns}
        {groupName && (
          <>

            {GroupName}

            <Typography>
              Members
            </Typography>

            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem",
              }}
              spacing={"2rem"}
              // bgcolor={"bisque"}
              height={"50vh"}
              overflow={"auto"}
            >
              {sampleUsers.map((i) => (
                <UserItem
                  user={i}
                  key={i._id}
                  isAdded
                  styling={{
                    boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                    padding: "1rem 2rem",
                    borderRadius: "1rem",
                  }}
                  handler={removeMemberHandler}
                />
              ))}
            </Stack>

            {ButtonGroup}
          </>

        )}


      </Grid>



      {isAddMember && <Suspense fallback={<Backdrop open />}>

        <AddMemberDialog />
      </Suspense>}

      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler} />
        </Suspense>
      )}




      <Drawer sx={{
        display: {
          xs: "block",
          sm: "none",
        },

      }} open={isMobileMenuOpen} onClose={handleMobileClose} >
        <GroupsList w={"50vw"} myGroups={samepleChats} chatId={chatId} />
      </Drawer>

    </Grid>
  )
};


const GroupsList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack width={w} 
  sx={{
    backgroundImage: bgGradient,
    height:"100vh",
    overflow:"auto",
  }}
  >
    {
      myGroups.length > 0 ? (
        myGroups.map((group) => <GroupsListItem group={group}
          chatId={chatId} key={group._id} />)
      ) : (

        <Typography textAlign={"center"} padding="1rem
       " >No Groups</Typography>
      )
    }
  </Stack>
)


const GroupsListItem = memo(
  ({ group, chatId }) => {
    const { name, avatar, _id } = group;

    return (
      <Link to={`?group=${_id}`}
        onClick={(e) => {
          if (chatId === _id) e.preventDefault();
        }} >
        <Stack
          direction={"row"}
          spacing={"1rem"}
          alignItems={"center"} >
          <AvatarCard avatar={avatar} />
          <Typography>{name}</Typography>
        </Stack>
      </Link>
    )
  }
);

export default Groups