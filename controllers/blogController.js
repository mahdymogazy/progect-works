const blog = require("../models/blogModel")
const user = require("../models/userModel")
const mongoose = require("mongoose")

const addBlog = async (authorId, title, body, photoUrl, tags) => {
    try {
        await blog.create({ authorId, title, body, photoUrl, tags, createdAt: Date.now() })
        return { message: "blod added!" }
    } catch (error) {
        return { error: `Error adding blog ${error}` }
    }
}

const updateBlog = async (_id, body) => {
    try {
        await blog.updateOne({ _id }, { body })
        return { message: "blod updated!" }
    } catch (error) {
        return { error }
    }
}

const deleteBlog = async (_id) => {
    try {
        await blog.deleteOne({ _id })
        return { message: "blod deleted!" }
    } catch (error) {
        return { error }
    }
}

//get the latest blogs. By default it will return blogs starting from a week ago till now.
const getLatestBlogs = async (timeAgo = 1000 * 60 * 60 * 24 * 7) => {
    try {
        return await blog.find({ createdAt: {$gt: Date.now() - timeAgo} })
    } catch (error) {
        return { error }
    }
}

const getAuthorBlogs = async (authorId) => {
    try {
        return await blog.find({ authorId })
    } catch (error) {
        return { error }
    }
}

const getBlogsWithTitle = async (title) => {
    try {
        return await blog.find({ title })
    } catch (error) {
        return { error }
    }
}

const getBlogsWithTag = async (tags) => {
    try {
        return await blog.find({ tags: { $in: tags } })
    } catch (error) {
        return { error }
    }
}

const getFollowing = async (_id) => {
    try {
        const currentUser = await user.findOne({ _id })
        return await blog.find({ authorId: { $in: currentUser.following } })
    } catch (error) {
        return { error }
    }
}



module.exports = { addBlog, updateBlog, deleteBlog, getLatestBlogs, getAuthorBlogs, getBlogsWithTitle, getBlogsWithTag, getFollowing }