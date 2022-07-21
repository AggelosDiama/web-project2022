const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: false,
    },
});

const UserModel = new mongoose.model("Users", UserSchema);

module.exports = UserModel;