import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import generateTokenAndSetCookies from '../utils/generateTokenAndSetCookies.js';

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