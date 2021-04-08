const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
    {
        firstname: { type: String, required: true},
        othername: { type: String, required: false},
        lastname: { type: String, required: true},
        emailaddress: { type: String, required: true},
        phonenumber: { type: String, required: false},
        password: {type: String, required: true}
    },
    {
        timestamps: true,
    }
);

UserSchema.virtual('wallets', {
    ref: 'Wallet',
    foreignField: 'userid',
    localField: '_id'
});

UserSchema.set('toJSON', { virtuals: true });

UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;