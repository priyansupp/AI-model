const { model, Schema } = require('mongoose');

const BlogSchema = new Schema({
    userid: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    }
})

const BlogModel = model('blogmodel', BlogSchema);
module.exports = BlogModel;
