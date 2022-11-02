const express = require('express');
const router = express.Router();
const UserController=require('../controllers/userDocument')
const ProductController=require('../controllers/productDocument')
const OrderController=require('../controllers/orderDocument')
const commonMW=require("../middlewares/commonMiddlewares")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/CreatUserDocument",commonMW.checkIsFreeAppUserOrNot, UserController.createUser)
router.post("/CreatProductDocument", ProductController.createProduct)
router.post("/CreatOderDocument",commonMW.checkIsFreeAppUserOrNot,commonMW.chengeAmountOfOrder, OrderController.createOrder)
router.get("/getOrderData",OrderController.getOrder)




module.exports = router;