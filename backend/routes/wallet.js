const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { CreateWallet } = require('../controller/wallet');


router.post('/create-wallet', authMiddleware, CreateWallet);

module.exports = router;