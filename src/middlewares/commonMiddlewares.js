
const userData=require("../models/userDocumentModel")

const checkIsFreeAppUserOrNot= function(req, res, next){
    let isAppUserFree = req.headers["isfreeappuser"]
    if(!isAppUserFree){
       return res.send("the request is missing a mandatory header")
    }
    else{
        let isAppUserFree = req.headers["isfreeappuser"]
        isAppUserFree = isAppUserFree.toLowerCase()==='true'? true:false ;
        req.isAppUserFree=isAppUserFree
        next()
    }
}
const chengeAmountOfOrder =  function(req, res, next){
   let isAppUserFree=req.isAppUserFree
    if(isAppUserFree){
         req.body.amount=0
         console.log("chengeAmountOfOrder is execute")

        next()
    }

    else{

        next()
    }
}

module.exports.checkIsFreeAppUserOrNot=checkIsFreeAppUserOrNot
module.exports.chengeAmountOfOrder=chengeAmountOfOrder
