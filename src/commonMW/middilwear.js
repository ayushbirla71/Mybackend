const jwt = require("jsonwebtoken");

////////////////////////////~CommonMid~//////////////////////////
const commonMid = async function (req, res, next) {
  try {
    let token = req.headers["x-auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken)
      return res.status(400).send({ status: false, msg: "token is invalid" });
    next()
  }
  catch (errer) {
    res.status(500).send({ mag: errer.message })
  }
}

////////////////////////////////~Module~///////////////////////
module.exports.commonMid=commonMid