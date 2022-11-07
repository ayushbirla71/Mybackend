const jwt = require("jsonwebtoken")

////////////////////////~Authenticate~/////////////////////////
const authenticate = function (req, res, next) {
    try {
        let token = req.headers["x-auth-token"]
        if (!token) return res.status(400).send({ status: false, msg: "token must be present in the request header" })
        let decodedToken = jwt.verify(token, 'functionup-thorium')
        if (!decodedToken) return res.status(400).send({ status: false, msg: "token is not valid" })
        req.decodedToken = decodedToken
        next()
    }
    catch (error) {
        res.status(500).send({ msg: error })
    }
}

//////////////////////////////////~Authorise~/////////////////////////////////////
const authorise = function (req, res, next) {
    try {
        let decodedToken = req.decodedToken.userId
        let userIdDetail = req.params.userId
        if (decodedToken !== userIdDetail) {
            return res.status(401).send("not allowed to updat other user details")
        }
        else { next() }
    } catch (error) {
        res.status(500).send({ msg: error })
    }
}

////////////////////////////////////~Module~/////////////////////////////////////////
module.exports.authenticate = authenticate
module.exports.authorise = authorise