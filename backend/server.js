const express = require('express');
require('dotenv').config();
require('./config/dbConnect')();
const authRoutes = require('./routes/auth');
const walletRoutes = require('./routes/wallet');


const app = express();
app.use(express.json());




app.use('/api/auth', authRoutes);
app.use('/api/wallet', walletRoutes);
app.get('/api', (req,res) => res.json('api v1'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log(`Server running on port: ${PORT}`);
});