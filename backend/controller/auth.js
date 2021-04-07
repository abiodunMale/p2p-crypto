const userModel = require('../models/user');

exports.Register = async (req, res) => {

    const user = req.body;
    try {

        const checkIfExist =  await userModel.findOne({emailaddress: user.emailaddress});
        if(checkIfExist){
            return res.status(409).json({message: 'user already exist'})
        }

        const newUser = new userModel(user);
        await newUser.save();
        return res.status(200).json({message: 'account created successfully', user: newUser});
        
    } catch (error) {
        return res.status(500).json({message: 'an error occured '+error})
    }
};