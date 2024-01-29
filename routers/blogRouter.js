const express = require("express")
const blogController = require("../controllers/blogController")

//blogs
const router = express.Router()

router.post("/add", (req, res) => {
    const { authorId, title, body, photoUrl, tags } = req.body
    blogController.addBlog(authorId, title, body, photoUrl, JSON.parse(tags))
        .then((result) => res.send(result))
        .catch((error) => res.send(error))
})

router.patch("/update", (req, res) => {
    const { id, body } = req.body
    blogController.updateBlog(id, body).then((result) => res.send(result)).catch((error) => res.send(error))
})

router.delete("/delete", (req, res) => {
    blogController.deleteBlog(req.body.id).then((result) => res.send(result)).catch((error) => res.send(error))
})

router.get("/latest", (req, res) => {
    blogController.getLatestBlogs().then((result) => res.send(result)).catch((error) => res.send(error))
})

router.get("/author", (req, res) => {
    blogController.getAuthorBlogs(req.body.authorId).then((result) => res.send(result)).catch((error) => res.send(error))
})

router.get("/search-title", (req, res) => {
    blogController.getBlogsWithTitle(req.body.title).then((result) => res.send(result)).catch((error) => res.send(error))
})

router.get("/search-tag", (req, res) => {
    blogController.getBlogsWithTag(JSON.parse(req.body.tags)).then((result) => res.send(result)).catch((error) => res.send(error))
})

router.get("/following", (req, res) => {
    blogController.getFollowing(req.body.userId).then((result) => res.send(result)).catch((error) => res.send(error))
})

module.exports = router