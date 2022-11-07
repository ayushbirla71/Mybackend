const orderModel=require("../models/orderDocumentModel")
const userModule=require("../models/userDocumentModel")
const productModule=require("../models/productDocumentModel")
const {isValidObjectId}=require('mongoose')


const createOrder= async function(req, res){
    let isAppUserFree=req.isAppUserFree
    const {userId, productId}=req.body
    if(!userId||!productId){
        return res.send("mendetory field")
    }
    if(!isValidObjectId(userId)||!isValidObjectId(productId)){
        return res.send("invalid userId and ProductId")

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
        return res.send({Order:finalData})
    }
    else{
        const ProductPrice=products.price
        const userBalance = users.balance
        if(ProductPrice>userBalance){
            return res.send("insufficient balance")
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
       // const userProfileUptate = await userModule.findByIdAndUpdate()
        return res.send({Order:Detail})
    }



    


}
//     const amount=req.body.amount
    
//     let isAppUserFree = req.headers["isfreeappuser"]
//     isAppUserFree = isAppUserFree.toLowerCase()==='true'? true:false ;
//     const {userId,productId }= req.body
//     if(!isValidObjectId(userId)||!isValidObjectId(productId)){
//         return res.send('userId or productId is invalid')
//     }
    
//     if(!userId||!productId){// check userId present or not in req body
//         res.send('userId or producntId is mandatory')
//     }
// //    else if(!productId){// check productId present or not in req body
// //         res.send('productId mandatory')
// //     }
//     const  user=await userModule.findById({_id:userId})
//      if(!user){// check userId present or not in our data base 
//        return res.send('user is not found')
//     } 
//     const product=await productModule.findById({_id:productId})
//      if(!product){// check productId present or not in our data base
//         res.send('product is not found')
//     }
//     if(isAppUserFree){
//         const userdata= {
//                 userId:userId,
//                 productId:productId,
//                 isFreeAppUser:isAppUserFree,
//                 amount: 0,
//                 date: Date.now()
                
//         }
//         const fullDataa= await orderModel.create(userdata)
//         res.send({Data:fullDataa})
//     }
//     else{
//         let userBalance=user.balance
//         if(userBalance<amount)
//         const userdata= {
//             userId:userId,
//             productId:productId,
//             isFreeAppUser:isAppUserFree,
//             amount: ,
//             date: Date.now()

//     }
    
//     if(isAppUserFree=="false"){//if isAppUserFree is false so check amount gretar den product
//         if(userBalance<amount){
//            return res.send('insufficient balance')
            
//         }
//         else {let newBalance= userBalance-amount
//         const decrrese= await userModule.findByIdAndUpdate(userId,{$set:{balance:newBalance},new:true})
//         }

//     }

//     const orderData=req.body

//     // console.log(orderData)
    
    
//     const saveData=await orderModel.create(orderData)
    
    
//     res.send({msg: saveData})
// }
const getOrder= async function(req, res){
    const getData= await orderModel.find().populate('userId').populate('productId')
    res.send({msg:getData})
}

module.exports.createOrder=createOrder
module.exports.getOrder=getOrder