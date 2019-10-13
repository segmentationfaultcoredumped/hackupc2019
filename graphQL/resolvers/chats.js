const Chat = require('../../models/Chat');
module.exports = {
    Query: {
        async getChats() {
            try{
                const chats = await Chat.find();
                return chats;
            } catch(error) {
                throw new Error(error);
            }
        }
    }
};