const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController")
const commonMW = require("../middlewares/commonMiddlewares")

/////////////////////////////~Routers~////////////////////////////////
router.post("/createBook", BookController.createBook)
router.post("/createUser", UserController.createUser)
router.post("/getdata",commonMW.commonMid,)
/////////////////////////////~Modules~////////////////////////////////
module.exports = router;