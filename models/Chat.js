const { model, Schema } = require('mongoose');

const chatSchema= new Schema({
    users: [String],
    messages: {
        type: Schema.Types.ObjectId,
        ref: 'messages'
    },
    createdAt: String,
    topic: String,
    type: String
});

module.exports = model('Chat', chatSchema);