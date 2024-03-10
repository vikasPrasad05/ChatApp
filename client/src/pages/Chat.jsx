import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import React, { Fragment, useRef } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { InputBox } from '../components/styles/StyledComponents';
import { graycolor, orange } from '../constants/color';
import FileMenu from '../components/dialog/FileMenu';
import { sampleMessage } from '../constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';



const user = {
  _id: "nvwhkbod",
  name: "vikas prasad"
}

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={graycolor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",

        }}
      >


        {
          sampleMessage.map((i) => (
            <MessageComponent message={i} user={user} />
          ))
        }
      </Stack>


      <form style={{
        height: "10%",
      }}
      >

        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}

        >
          <IconButton sx={{
            position: "absolute",
            left: "1.5rem",
            rotate: "30deg",
          }}


          >
            <AttachFileIcon />
          </IconButton>



          <InputBox placeholder="Type message here..." />


          <IconButton type="submit" sx={{
            rotate: "- 30deg",
            bgcolor: orange,
            marginLeft: "1rem",
            color: "white",
            padding: "0.5rem",
            "&:hover": {
              bgcolor: "error.dark",
            }

          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />

    </Fragment>

  )

}

export default AppLayout()(Chat);  