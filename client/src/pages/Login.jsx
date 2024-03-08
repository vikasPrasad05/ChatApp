import React, { useState } from 'react'
import {
    Avatar,
    Button,
    Container,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography
} from '@mui/material'
import {CameraAlt as CameraAltIcon} from "@mui/icons-material"
import { VisuallyHiddenInputs } from '../components/styles/StyledComponents'
import {useFileHandler, useInputValidation} from "6pp"
import { usernameValidator } from '../utils/validators';



const Login = () => {



    const [isLogin, setIsLogin] = useState(true);

    const toggleLogin = () => setIsLogin((prev => !prev));

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("",usernameValidator);
    const password = useInputValidation("");

    const avatar = useFileHandler("single")

    const handleLogin = (e) =>{
        e.preventDefault();
    }

    const handleSignUp = (e) =>{
        e.preventDefault();
    }



    return <Container component={"main"} maxWidth="xs" sx={{
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

            {isLogin ? (
                <>

                    <Typography variant='h5'>Login</Typography>
                    <form style={{
                        width: "100%",
                        marginTop: "2rem",
                    }}
                    onSubmit={handleLogin}
                    >

                        <TextField
                            label='username'
                            required
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={username.value}
                            onChange={username.changeHandler}
                        />

                        <TextField
                            label='password'
                            required
                            fullWidth
                            type="password"
                            margin="normal"
                            variant="outlined"
                            value={password.value}
                            onChange={password.changeHandler}
                        />


                        <Button sx={{
                            
                        }}
                            fullWidth
                            variant='contained'
                            color='primary'
                            type='submit'
                        >

                            Login
                        </Button>

                        <Typography textAlign={"center"} m={"1rem"}>
                            OR
                        </Typography>

                        <Button sx={{
                            
                            backgroundColor: "aliceblue",

                        }}

                            fullWidth
                            variant='text'
                            onClick={toggleLogin}
                        >Sign Up Instead

                        </Button>
                    </form>
                </>
            ) : (
                <>

                    <Typography variant='h5'>Sign Up</Typography>
                    <form style={{
                        width: "100%",
                        marginTop: "1rem",
                    }}
                    onSubmit={handleSignUp}
                    >

                        <Stack
                            position={"relative"}
                            width={"10rem"}
                            margin={"auto"}>

                            <Avatar sx={{
                                width: "10rem",
                                height: "10rem",
                                objectFit: "contain",
                    
                            }}
                            src={avatar.preview}
                            />
                         {
                            avatar.error && (
                                <Typography color="error" variant='caption'>
                                    {avatar.error}
                                </Typography>
                            )
                        }

                          <IconButton 
                          sx={{
                            position:"absolute",
                            bottom:"0",
                            right:"0",
                            color:"white",
                            bgcolor:"rgba(0,0,0,.5)",
                            ":hover":
                            {
                                bgcolor:"rgba(0,0,0,.5)"
                            },
                          }}
                          component="label"
                          >
                            <>
                            <CameraAltIcon />
                            <VisuallyHiddenInputs type="file" onChange={avatar.changeHandler} />
                            </>
                          </IconButton>

                        </Stack>

                        <TextField
                            label='Name'
                            required
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={name.value}
                            onChange={name.changeHandler}
                        />

                        <TextField
                            label='Bio'
                            required
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={bio.value}
                            onChange={bio.changeHandler}
                        />

                        <TextField
                            label='username'
                            required
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={username.value}
                            onChange={username.changeHandler}
                        />
 
                        {
                            username.error && (
                                <Typography color="error" variant='caption'>
                                    {username.error}
                                </Typography>
                            )
                        }

                        <TextField
                            label='password'
                            required
                            fullWidth
                            type="password"
                            margin="normal"
                            variant="outlined"
                            value={password.value}
                            onChange={password.changeHandler}
                        />

                        <Button sx={{
                            
                        }}
                            fullWidth
                            variant='contained'
                            color='primary'
                            type='submit'
                        >

                            Sign Up
                        </Button>

                        <Typography textAlign={"center"} m={"1rem"}>
                            OR
                        </Typography>

                        <Button sx={{
                            
                            backgroundColor: "aliceblue",

                        }}

                            fullWidth
                            variant='text'
                            onClick={toggleLogin}
                        >login Instead

                        </Button>
                    </form>
                </>

            )}

        </Paper>
    </Container>
}


export default Login