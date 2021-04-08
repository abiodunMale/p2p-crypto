const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
    let token;

    if(req.headers.authorization){
        try {
            token = req.headers.authorization
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const user = await User.findById(decoded.id);
            req.user = user;
            next();
        }catch (error) {
            res.status(401).json({message: `Not Authorized, Invalid Token: ${error}`});
        }
    }
    else{
        res.status(500).json({message: 'Not Authorized, please provide a token'});
    }
};

module.exports = authMiddleware;