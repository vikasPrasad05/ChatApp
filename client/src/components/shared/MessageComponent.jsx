import { Typography } from '@mui/material';
import React, { memo } from 'react'

const MessageComponent = ({ message, user }) => {
    const { sender, content, attchments = [], createdAt } = message;

    const sameSender = sender?._id === user?._id

    return (
        <div style={{
            alignSelf: sameSender ? "flex-end" : "flex-start",
            backgroundColor: "white",
            color: "black",
            borderRadius: "5px",
            padding: "0.5rem",
            width: "fit-content",
            boxShadow: "3px 3px 10px gray",

        }}>


            {
                !sameSender && <Typography color={"#2694ab"} >{sender.name}</Typography>
            }
            {
                content && <Typography>{content}</Typography>
            }
        </div>
    )
}

export default memo(MessageComponent); 