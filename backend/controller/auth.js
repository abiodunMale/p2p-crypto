const userModel = require('../models/user');
const bcrypt = require('bcryptjs');

exports.Register = (req, res) => {
    res.json({msg: 'resgister end point', data: req.body});
};

const checkPasswordMatch = async (passwordEntered, userPassword) => {
    return await bcrypt.compare(passwordEntered, userPassword)
};

exports.Login = async (req, res) =>{
    
    try {
        const { emailaddress, password } = req.body;
        const user = await userModel.findOne({emailaddress: emailaddress});

        if(user && (await checkPasswordMatch(password, user.password))){

            const data = {
                userDetails: user,
                token: 'bhshcshachachcschsv'
            };

            res.status(200).json({message:'Logged in Successfully', data: data });

        }
        else{
            res.status(401).json({message:'Invalid Credentials'});
        }
    } catch (error) {
        res.status(500).json({message:`An Error Occured: ${error}`});
    }
    
};