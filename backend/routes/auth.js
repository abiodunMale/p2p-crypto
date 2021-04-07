const router = require('express').Router();
const { Register } = require('../controller/auth');

router.post('/register', Register);


module.exports = router;