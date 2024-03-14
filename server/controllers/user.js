import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { sendToket } from "../utils/features.js";

// create a new user and save it to database and save token in cookies 
const newUser = async (req, res) => {


    const { name, username, password, bio } = req.body;


    const avatar = {
        public_id: "ajhsdb",
        url: "vaukev",
    };

    const user = await User.create({
        name,
        username,
        password,
        bio,
        avatar,
    });


    sendToket(res, user, 201, "User created")
}

const Login = async(req, res,next) => {
   try {
    const { username, password } = req.body;


    const user = await User.findOne({username}).select("+password");
c
    if(!user) return next(new Error("Invalid username"));

    const isMatch = await compare(password, user.password);

    if(!isMatch) return next(new Error("Invalid password"));;


    sendToket(res, user, 200, `Welcome Back ${user.name}`)
   } catch (error) {
    next(error);
   }
};


const getMyProfile =async(req, res) =>{};


export { Login, newUser,getMyProfile };    