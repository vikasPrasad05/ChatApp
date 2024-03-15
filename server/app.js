import cookieparser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import { errormiddleware } from "./middlewares/error.js";
import { connectDB } from "./utils/features.js";

import chatRoute from "./routes/chat.js";
import userRoute from "./routes/user.js";



dotenv.config({
    path: "./.env",
})

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;



connectDB(mongoURI);




const app = express();

// using middlewares here 
app.use(express.json());
app.use(cookieparser());



app.use("/user", userRoute);
app.use("/chat", chatRoute);



app.get("/", (req, res) => {
    res.send("HELLO WORLD");
});



app.use(errormiddleware);



app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});