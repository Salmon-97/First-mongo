const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title:  {
        type: String,
        required: true
    },
    post:  {
        type: String,
        required: true
    },
}, 
{timestamps: true}
);

const Post = mongoose.model("post", postSchema);

module.exports = Post;