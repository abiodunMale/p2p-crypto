const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema(
    {
        userid: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true 
        },
        network: { type: String, required: true },
        balance: { type: Number, required: true },
        address: { type: String, required: true },
        label: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;