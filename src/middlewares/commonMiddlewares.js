
const userData=require("../models/userDocumentModel")

const checkIsFreeAppUserOrNot= function(req, res, next){
    let isAppUserFree = req.headers["isfreeappuser"]
    if(!isAppUserFree){
        res.send("the request is missing a mandatory header")
    }
    else{
        if(isAppUserFree=="true"){
            req.body.isFreeAppUser=true
        }
        else{ req.body.isFreeAppUser=false}
    console.log("checkIsFreeAppUserOrNot execute")
    next()
    }
}
const chengeAmountOfOrder =  function(req, res, next){
    let isAppUserFree = req.headers["isfreeappuser"]
    if(isAppUserFree=="true"){
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
