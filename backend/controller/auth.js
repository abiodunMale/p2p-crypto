const userModel = require('../models/user');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken')

exports.Register = async (req, res) => {

    const user = req.body;
    try {

        const checkIfExist =  await userModel.findOne({emailaddress: user.emailaddress});
        if(checkIfExist){
            return res.status(409).json({message: 'User Already Exist'})
        }

        const newUser = new userModel(user);
        await newUser.save();
        return res.status(200).json({message: 'Account Created Successfully', user: newUser});
        
    } catch (error) {
        return res.status(500).json({message: 'An Error Occured '+error})
    }
};

const checkPasswordMatch = async (passwordEntered, userPassword) => {
    return await bcrypt.compare(passwordEntered, userPassword)
};

exports.Login = async (req, res) =>{
    
    const { emailaddress, password } = req.body;
    try {
        const user = await userModel.findOne({emailaddress: emailaddress});

        if(user && (await checkPasswordMatch(password, user.password))){

            const data = {
                userDetails: user,
                token: generateToken(user._id)
            };

            return res.status(200).json({message:'Logged in Successfully', data: data });

        }
        else{
            return res.status(401).json({message:'Invalid Credentials'});
        }
    } catch (error) {
        return res.status(500).json({message:`An Error Occured: ${error}`});
    }
};