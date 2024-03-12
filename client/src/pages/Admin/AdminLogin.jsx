
import { useInputValidation } from '6pp'
import {
    Button,
    Container,
    Paper,
    TextField,
    Typography
} from '@mui/material'
import React from 'react'
import { bgGradient } from '../../constants/color'
import { Navigate } from 'react-router-dom'


const isAdmin = true;

const AdminLogin = () => {

    const secretkey = useInputValidation("")


    const submitHandler = (e) => {
        e.preventDeafault();
        console.log("submit")
    };

    if (isAdmin) return <Navigate to="/admin/dashboard" />

    return (
        <div style={{
            backgroundImage: bgGradient,
        }} >
            <Container component={"main"} maxWidth="xs" sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Paper elevation={3}
                    sx={{
                        padding: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center"
                    }}
                >


                    <Typography
                        variant='h5'>
                        Admin Login
                    </Typography>

                    <form
                        style={{
                            width: "100%",
                            marginTop: "2rem",
                        }}
                        onSubmit={submitHandler}
                    >

                        <TextField
                            label="Secret key"
                            required
                            fullWidth
                            type="Password"
                            margin="normal"
                            variant="outlined"
                            value={secretkey.value}
                            onChange={secretkey.changeHandler}
                        />


                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                        >

                            Login
                        </Button>


                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default AdminLogin