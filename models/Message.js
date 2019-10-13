const { model, Schema } = require('mongoose');

const messageSchema= new Schema({
    user: String,
    body: String,
    sentAt: String
});

module.exports = model('Message', messageSchema);