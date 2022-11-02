const productModel=require("../models/productDocumentModel")

const createProduct= async function(req, res){
    const userData= req.body
    const saveData= await productModel.create(userData)
    
    console.log(userData)
    
    res.send({msg: saveData})
}


module.exports.createProduct=createProduct