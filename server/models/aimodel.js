const { model, Schema } = require('mongoose');


const AIModelSchema = new Schema({
    userid: {
        type: String,
        required: true,
    },
    modelname: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        enum: [0,1,2,3,4,5],
        default: 0
    },
    url: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Text to Image', 'Sentiment Analysis', 'Generative AI model'],
        default: 'Text to Image',
    },
    library: {
        type: String,
        enum: ['Pytorch', 'Pandas', 'Numpy', 'Tensorflow', 'Keras', 'Sci-py'],
        default: 'Pytorch'
    }
});



const AIModel = model('AImodel', AIModelSchema);
module.exports = AIModel;