const userModel = require('../models/user');

exports.Register = (req, res) => {
    res.json({msg: 'resgister end point', data: req.body});
};