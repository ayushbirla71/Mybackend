const productModel=require("../models/productDocumentModel")

/////////////////////////~CreateProduct~/////////////////////////
const createProduct= async function(req, res){
    try{
    const userData= req.body
    const saveData= await productModel.create(userData)
    console.log(userData)
    res.send({msg: saveData})
    }
    catch(err){
        res.status(500).send({msg:err})
    }
}

///////////////////////////~Modules~////////////////////////////
module.exports.createProduct=createProduct