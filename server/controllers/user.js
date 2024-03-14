import { User } from "../models/user.js";

// create a new user and save it to database and save in cookies 
const newUser = async (req, res) => {


    const { name, username, password, bio } = req.body;


    const avatar = {
        public_id: "ajhsdb",
        url: "vaukev",
    };

    await User.create({
        name,
        username,
        password,
        bio,
        avatar,
    });


    res.status(201).json({ message: "User created successfully" });
}

const Login = (req, res) => {
    res.send("hello world");
};


export { Login, newUser };   