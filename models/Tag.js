const { model, Schema } = require('mongoose');

const tagSchema = new Schema({
    name: String,
    relatedTags: [String]
});

module.exports = model('Tag', tagSchema);