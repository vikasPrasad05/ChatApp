import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

const ConfirmDeleteDialog = ({open, handleClose, deleteHandler}) => {
  return (
   <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Confirm Delete</DialogTitle>
    <DialogContent>

         <DialogContentText width={"20rem"}>
            Pakka na delete kerna hai ?
         </DialogContentText>

    </DialogContent>
    <DialogActions>  
       <Button onClick={handleClose} >NO</Button>
       <Button onClick={deleteHandler} color="error">Yes</Button>
    </DialogActions>
   </Dialog>
  )
}

export default ConfirmDeleteDialog