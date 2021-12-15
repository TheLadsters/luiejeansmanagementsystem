const asyncHandler = require('express-async-handler')
const User = require('../models/user.model.js')
const generateToken = require('../utils/generateToken');

const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password, role, pic, tasks} = req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400)
        throw new Error('User Already Exists');
    }

    const user = await User.create({
        name, email, password, role, pic, tasks
    });

        if(user){
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                role: user.role,
                pic:user.pic,
                tasks:user.tasks,
                token: generateToken(user._id),
            });
        } else {
            res.status(400)
            throw new Error("Error Occured!")
        }

});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            role: user.role,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        res.status(400)
        throw new Error("Invalid Email or Password!")
    }
});

const addTaskUser = asyncHandler(async (req, res) => {

    const user = await User.findbyId( req.user._id );

    if(user){
        user.tasks = req.body.tasks ||user.tasks;

        const updateUser = await user.save();

        res.json({
            _id: updateUser._id,
            tasks: updateUser.tasks
        })

    } else{
        res.status(404);
        throw new Error("User not found!");
    }
});

module.exports = { registerUser, authUser, addTaskUser };