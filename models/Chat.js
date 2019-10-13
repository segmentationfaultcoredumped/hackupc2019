const { model, Schema } = require('mongoose');

const chatSchema= new Schema({
    users: [String],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'messages'
    }],
    // messages: [String],
    createdAt: String,
    topic: String
});

module.exports = model('Chat', chatSchema);