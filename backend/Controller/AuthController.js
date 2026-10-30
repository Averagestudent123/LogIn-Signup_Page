const bcrypt = require('bcrypt');
const userModel = require('../Model/User');
const jwt = require('jsonwebtoken');





const signup = async (req,res) => {
    try{
        const {name, email, password} = req.body;
        const user = await userModel.findOne({email});
        if(user){
            return res.status(409).json({message: "User already exists,please Login", success: false});
        }
        const newUser = new userModel({name,email,password});
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();
        res.status(201).json({message: "User created successfully", success: true});
    }catch (err){
        res.status(500).json({message: "Internal server error", success: false});

    }
}

const login = async (req,res) => {
    try{
        const {name, email, password} = req.body;
        const user = await userModel.findOne({email});
        const errorMessage = "Invalid email or password";
        if(!user){
            return res.status(401).json({message: errorMessage, success: false});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({message: errorMessage, success: false});
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
        res.status(200).json({message: "Login successful", success: true, token});
    }catch (err){
        res.status(500).json({message: "Internal server error", success: false});

    }
}

module.exports = {signup,login};