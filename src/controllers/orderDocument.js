const orderModel=require("../models/orderDocumentModel")
const userModule=require("../models/userDocumentModel")
const productModule=require("../models/productDocumentModel")
// const { use } = require("../routes/route")
const {isValidObjectId}=require('mongoose')

const createOrder= async function(req, res){
    
    const amount=req.body.amount
    let isAppUserFree = req.headers["isfreeappuser"]
    const {userId,productId }= req.body
    
    if(!userId){// check userId present or not in req body
        res.send('userId mandatory')
    }
   else if(!productId){// check productId present or not in req body
        res.send('productId mandatory')
    }
    const  user=await userModule.findById({_id:userId})
     if(!user){// check userId present or not in our data base 
       return res.send('userId is invalid')
    } 
    const product=await productModule.findById({_id:productId})
     if(!product){// check productId present or not in our data base
        res.send('productId is invalid')
    }
    let userBalance=user.balance
    if(isAppUserFree=="false"){//if isAppUserFree is false so check amount gretar den product
        if(userBalance<amount){
           return res.send('insufficient balance')
            
        }
        else {let newBalance= userBalance-amount
        const decrrese= await userModule.findByIdAndUpdate(userId,{$set:{balance:newBalance},new:true})
        }

    }

    const orderData=req.body

    // console.log(orderData)
    
    
    const saveData=await orderModel.create(orderData)
    
    
    res.send({msg: saveData})
}
const getOrder= async function(req, res){
    const getData= await orderModel.find().populate('userId').populate('productId')
    res.send({msg:getData})
}

module.exports.createOrder=createOrder
module.exports.getOrder=getOrder