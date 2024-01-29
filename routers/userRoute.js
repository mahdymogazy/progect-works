const express = require("express")
const userController = require("../controllers/userController")
const bcrypt = require("bcrypt")

//users
const router = express.Router()

router.post("/register", (req, res) => {
    const { email, password, name } = req.body
    userController.register(email, password, name).then((result) => res.send(result)).catch((error) => res.send(error))
})

router.post("/login", (req, res) => {
    const { email, password } = req.body
    userController.login(email, password).then((result) => res.send(result)).catch((error) => res.send(error))
})

router.post("/follow", (req, res) => {
    const { currentUserId, toFollowUserId } = req.body
    userController.followUser(currentUserId, toFollowUserId).then((result) => res.send(result)).catch((error) => res.send(error))
})

router.post("/unfollow", (req, res) => {
    const { currentUserId, toUnfollowUserId } = req.body
    userController.unfollowUser(currentUserId, toUnfollowUserId).then((result) => res.send(result)).catch((error) => res.send(error))
})

module.exports = router