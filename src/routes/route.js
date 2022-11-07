const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middilwear= require("../commonMW/middilwear")

//////////////////////~Routes~////////////////////
router.post("/users", userController.createUser  )
router.post("/login", userController.loginUser)
router.get("/users/:userId",middilwear.commonMid, userController.getUserData)
router.put("/users/:userId",middilwear.commonMid, userController.updateUser)
router.delete("/userDeleteAccount/:userId",middilwear.commonMid, userController.DeletUser)

/////////////////////~Module~////////////////////
module.exports = router;