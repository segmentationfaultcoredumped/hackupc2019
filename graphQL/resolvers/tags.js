const Tag = require('../../models/Tag');

module.exports = {
    Query: {
        async getTags(){
            try{
                const tags = await Tag.find();
                return tags;
            } catch(error) {
                throw new Error(error);
            }
        }
    }
}