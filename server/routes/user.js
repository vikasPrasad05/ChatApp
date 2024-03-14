import express from "express";
import { Login, newUser } from "../controllers/user.js";
import { singleAvatar } from "../middlewares/multer.js";


const app = express.Router();



app.post("/new", singleAvatar, newUser);
app.post("/Login", Login);


export default app;  