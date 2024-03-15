const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
    },
    hashPass: {
        type: String,
        required: [true, 'Please enter a password'],
    }
});

const UserModel = model('Usermodel', userSchema);
module.exports = UserModel;