const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
        required: true
    },
    tags: {
        type: [{ type: String }]
    },
    createdAt: {
        type: Number,
        required: true
    }
})

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog