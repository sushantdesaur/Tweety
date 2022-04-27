// Controller/auth.js
import User from '../models/user';
import {hashPassword, comparePassword} from '../utils/auth';
import jwt from 'jsonwebtoken'

// Register
export const register = async (req, res) => {
    try {
        // console.log(req.body)
        const {name, username, email, password} = req.body;

        // validation
        if (!name) return res.status(400).send('Name is required"');
        if (!password || password.length < 6)   {
            return res.status(400).send("Password is required and should be min 6 characters long");
        }
        let emailExist = await User.findOne({email}).exec();

        if (emailExist) return res.status(400).send("Email is taken");

        let usernameExist = await User.findOne({ username }).exec();

        if (usernameExist) return res.status(400).send("Username is taken");

        // hash password
        const hashedPassword = await hashPassword(password)

        // register
        const user =  new User ({
            name, username, email, password: hashedPassword
        })
        await user.save(); // Save the user
        console.log("Saved User => ", user);
        return res.json({ ok: true })
    } catch (err) {
        console.log(err)
        return res.status(400).send("Error. Try Again")
    }
}  

// login
export const login = async (req, res) => {
    try {
        // console.log(req.body)
        const {email, password} = req.body
        const user = await User.findOne({email}).exec();

        // Check if our database has user with that email
        if (!user) return res.status(400).send("No user found")
        // check password

        const match = await comparePassword(password, user.password);
        // create signed jwt
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        // return user and token to client, exclude hashed password

        user.password= undefined;
        
        // send token in cookie
        res.cookie("token", token, {
            httpOnly: true,
            // secure: true, // only works on https
        });

        // send user as json response
        res.json(user);

    } catch (err) {
        console.log(err)
        return res.status(400).send("Error. Try again")
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.json({message: " Sign out success"})
    } catch (err) {
        console.log(err)
    }
}