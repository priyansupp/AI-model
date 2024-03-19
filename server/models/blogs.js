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
    },
    category: {
        type: String,
        enum: ['Text to Image', 'Sentiment Analysis', 'Image Classification', 'Summarization', 'Translation', 'Voice Activity Detection', 'Reinforcement Learning', 'Robotics', 'Video Classification', 'Feature Extraction', 'Object Detection', 'Sentiment Analysis', 'GLOW Model'],
        default: 'Text to Image',
    },
})

const BlogModel = model('blogmodel', BlogSchema);
module.exports = BlogModel;
