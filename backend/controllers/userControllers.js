const asyncHandler = require('express-async-handler')
const User = require('../models/user.model.js')
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');

const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password, role, pic} = req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400)
        throw new Error('User Already Exists');
    }

    const user = await User.create({
        name, email, password, role, pic
    });

        if(user){ 
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                role: user.role,
                pic:user.pic,
                token: generateToken(user._id),
                createdAt: user.createdAt,
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
            createdAt: user.createdAt,
        });
    } else {
        res.status(400)
        throw new Error("Invalid Email or Password!")
    }
});

const addTask = asyncHandler(async (req, res) => {

    const { email, task } = req.body;
    
    const user = await User.findOne({email});

    if(user){    

         User.updateOne(
            { email: email },
            { $push: { tasks : [ task ] } },
            function(err, result) {
              if (err) {
                return res.sendstatus(400);
              } else {
                res.send(result);
                return;
              }
            }
        );
    }

});

const deleteTask = asyncHandler(async (req, res) => {

    const { email, task } = req.body;
    
    const user = await User.findOne({email});

    if(user){   

        User.updateOne({email: email}, 
            { "$pull": { "tasks": task } },
            function(err, result) {
                if (err) {
                  return res.sendstatus(400);
                } else {
                  res.send(result);
                  return;
                }
              }
            
            );

        //  User.updateOne(
        //     {  },
        //     { $pull: { tasks : [ task ] } },
        //     function(err, result) {
        //       if (err) {
        //         return res.sendstatus(400);
        //       } else {
        //         res.send(result);
        //         return;
        //       }
        //     }
        // );
    }

});

const editName = asyncHandler(async (req, res) => {
    const { name, password, emailUser } = req.body;

    const userLoggedIn = await User.findOne({ email: emailUser });

        if(userLoggedIn && (await userLoggedIn.matchPassword(password))){
           
        //   await User.updateOne({ email: emailUser }, {
        //         name: name
        //       });

        const updatedData = await User.findOneAndUpdate({ email: emailUser }, 
            {name : name}, {
            new: true
          });
             
             res.json({
                _id: updatedData._id,
                name: updatedData.name,
                email: updatedData.email,
                isAdmin: updatedData.isAdmin,
                role: updatedData.role,
                pic: updatedData.pic,
                token: generateToken(updatedData._id),
                createdAt: updatedData.createdAt,
            });
              

        } else {
            res.status(400)
            throw new Error("Invalid Password!")
        }
    
});

const editPassword = asyncHandler(async (req, res) => {
    const { changePassword, password, emailUser } = req.body;

    const userLoggedIn = await User.findOne({ email: emailUser });

        if(userLoggedIn && (await userLoggedIn.matchPassword(password))){
            const salt = await bcrypt.genSalt(10);
            const updatedPassword = await bcrypt.hash(changePassword, salt);

        const updatedData = await User.findOneAndUpdate({ email: emailUser }, 
            {password : updatedPassword}, {
            new: true
          });
             
             res.json({
                _id: updatedData._id,
                name: updatedData.name,
                email: updatedData.email,
                isAdmin: updatedData.isAdmin,
                role: updatedData.role,
                pic: updatedData.pic,
                token: generateToken(updatedData._id),
                createdAt: updatedData.createdAt,
            });
              

        } else {
            res.status(400)
            throw new Error("Invalid Password!")
        }
    
});

module.exports = { registerUser, editName, editPassword, authUser, addTask, deleteTask };