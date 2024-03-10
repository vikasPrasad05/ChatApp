import React from 'react'
import AppLayout from '../components/layout/AppLayout';
import { Box, Typography } from '@mui/material';
import { graycolor } from '../constants/color';

const Home = () => {
  return (

    <Box 
    bgcolor={graycolor} 
    height={"100%"} 
     >
      <Typography
        p={"1rem"}
        variant="h5"
        textAlign={"center"} >
        Select a Friends Chats
      </Typography>
    </Box>

  )

};

export default AppLayout()(Home);