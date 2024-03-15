import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { cookieOptions, sendToket } from "../utils/features.js";
import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";

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
};


// login user and save token in cookie

const Login = TryCatch(async (req, res, next) => {

    const { username, password } = req.body;

    const user = await User.findOne({ username }).select("+password");

    if (!user) return next(new ErrorHandler("Invalid username OR password", 404));

    const isMatch = await compare(password, user.password);

    if (!isMatch)
        return next(new ErrorHandler("Invalid username OR password", 404));


    sendToket(res, user, 200, `Welcome Back ${user.name}`)

})


const getMyProfile = TryCatch(async (req, res) => {
    const user = await User.findById(req.user);



    res.status(200).json({
        success: true,
        user,
    });
});

const logout = TryCatch(async (req, res) => {

    return res.status(200)
        .cookie("chathub-token", "",
            { ...cookieOptions, maxAge: 0 }).json({
                success: true,
                message: "logout successfully",
            });
});


const searchUser = TryCatch(async (req, res) => {

const {name} = req.query;







    return res.status(200)
      .json({
                success: true,   
                message: name,
            });
});


export { Login, newUser, getMyProfile, logout, searchUser };    