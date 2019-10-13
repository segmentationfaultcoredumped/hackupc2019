const { model, Schema } = require('mongoose');

const chatSchema= new Schema({
    users: [String],
    messages: [{
        id: Schema.Types.ObjectId,
        user: String,
        body: String,
        sentAt: String
    }],
    createdAt: String,
    topic: String
});

module.exports = model('Chat', chatSchema);