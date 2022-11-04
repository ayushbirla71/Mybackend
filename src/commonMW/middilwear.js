const jwt = require("jsonwebtoken");
const commonMid = async function (req, res, next) {
let token = req.headers["x-auth-token"];
if (!token) token = req.headers["x-auth-token"];
   if (!token) return res.send({ status: false, msg: "token must be present" });
  
  console.log(token);


  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
  console.log(decodedToken)
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    next()
}

module.exports.commonMid=commonMid