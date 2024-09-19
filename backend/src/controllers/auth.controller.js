import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import pkg from 'bcryptjs';
const { compare } = pkg;
import generateTokenAndSetCookies from '../utils/generateTokenAndSetCookies.js';

// Controller for create account
export const createaccount = async (req, res) => {
    const { email, password, firstname, lastname } = req.body;

    try {
        if (!email || !password || !firstname || !lastname) {
            throw new Error("All fields are required.")
        }

        const userAlreadyExists = await User.findOne({ email })
        if (userAlreadyExists) {
            return res.status(400).json({ success: false, message: 'User already exists.' });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const verificationToken = Math.floor(100000  + Math.random() * 900000).toString();

        const user = new User({
            email,
            password: hashedPassword,
            firstname,
            lastname,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours is ms. 
        })
        
        await user.save();
        
        //jwt
        generateTokenAndSetCookies(res, user._id);

        res.status(201).json({
            succes: true,
            message: 'User created successfully',
            user: {
                ...user._doc,
                password: undefined,
            }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const signin = async (req,res) => {
    
    const {email, password} = req.body;

    try {
        
        // Credentials validation
        const user = await User.findOne({email});
        if(!user){
            res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            });
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password)
        if(!isPasswordValid){
            res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            });
        }
        
        // Generate a token for user
        generateTokenAndSetCookies(res, user._id);

        // Declare new last sign in time
        user.lastSignIn = new Date();

        // Save and send success response
        await user.save();
        res.status(200).json({
            success: true,
            message: 'Signed in',
            user: {
                ...user._doc,
                password: undefined
            }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

// Controller for sign out
export const signout = async (req,res) => {
    // res.send('Hello from sign out ><')
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: 'Signed out',
    })
}