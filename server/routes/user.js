import express from "express";
import { Login, getMyProfile, logout, newUser, searchUser } from "../controllers/user.js";
import { singleAvatar } from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/auth.js";


const app = express.Router();



app.post("/new", singleAvatar, newUser);
app.post("/Login", Login);


// after here user must be logged in to access the route 

app.use(isAuthenticated);

app.get("/me", getMyProfile);
app.get("/logout", logout);
app.get("/search", searchUser);
 
export default app;  