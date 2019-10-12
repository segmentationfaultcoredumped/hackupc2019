const { model, Schema } = require('mongoose');

const userSchema= new Schema({
    username: String,
    password: String,
    email: String,
    description: String,
    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: 'tags'
        }
    ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }],
    chat: String,
    createdAt: String
});

module.exports = model('User', userSchema);