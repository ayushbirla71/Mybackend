const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookModel=require("../bookModels/book_models")
const boolController=require("../bookController/book_controller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)


router.post("/createBooks", boolController.CreateNewBook  )

router.get("/getBooksData", boolController.getAllBookData)

module.exports = router;