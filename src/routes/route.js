const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const midd = require("../middleware/auth")

//////////////////////~apis~///////////////////////
router.post("/users", userController.createUser)
router.post("/login", userController.loginUser)
router.get("/users/:userId", midd.authenticate, midd.authorise, userController.getUserData)
router.post("/users/:userId/posts", midd.authenticate, midd.authorise, userController.postMessage)
router.put("/users/:userId", userController.updateUser)


//////////////////////~Modules~/////////////////////
module.exports = router;