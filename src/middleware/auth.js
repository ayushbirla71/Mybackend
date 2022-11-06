const jwt=require("jsonwebtoken")
const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})

    req.decodedToken=decodedToken

    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let decodedToken=req.decodedToken.userId
    let userIdDetail= req.params.userId
    if(decodedToken!==userIdDetail){
        return res.send ("not allowed to updat other user details")

    }

    else {next()}
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise