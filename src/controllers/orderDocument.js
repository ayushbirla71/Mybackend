const orderModel=require("../models/orderDocumentModel")
const userModule=require("../models/userDocumentModel")
const productModule=require("../models/productDocumentModel")
const {isValidObjectId}=require('mongoose')

////////////////////////~CreateOrder~//////////////////////////////
const createOrder= async function(req, res){
    try{
    let isAppUserFree=req.isAppUserFree
    const {userId, productId}=req.body
    if(!userId||!productId){
        return res.status(400).send("mendetory field")
    }
    if(!isValidObjectId(userId)||!isValidObjectId(productId)){
        return res.status(400).send("invalid userId and ProductId")
    }
    const users = await userModule.findById(userId)
    const products = await productModule.findById(productId)
    if(!users||!products){
        return res.send("user or product is not avalable in data base")
    }
    if(isAppUserFree){
        const OrderDetail={
            userId:userId,
            productId:productId,
            isAppUserFree:isAppUserFree,
            amount: 0,
            //date: new Date()
        }
        const finalData= await orderModel.create(OrderDetail)
        return res.status(201).send({Order:finalData})
    }
    else{
        const ProductPrice=products.price
        const userBalance = users.balance
        if(ProductPrice>userBalance){
            return res.status(402).send("insufficient balance")
        }
        const Detail={
            userId:userId,
            productId:productId,
            isAppUserFree:isAppUserFree,
            amount: ProductPrice,
           // date: new Date()
        }
        let finalbalance=userBalance-ProductPrice
        const userProfileUptate = await userModule.findByIdAndUpdate(userId,{$set:{balance:finalbalance},new:true})
        return res.status(201).send({Order:Detail})
    }
}
catch(error){
    res.status(500).send({msg:error})
}
}

/////////////////////////////////~GetOrder~//////////////////////////////
const getOrder= async function(req, res){
    try{
    const getData= await orderModel.find().populate('userId').populate('productId')
    res.send({msg:getData})
    }
    catch(error){
        res.status(500).send({msg:error})
    }
}

////////////////////////////////~Modules~/////////////////////////////////
module.exports.createOrder=createOrder
module.exports.getOrder=getOrder