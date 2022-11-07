const UserModel = require("../models/userModel")

/////////////////////////////~BasicCode~////////////////////////////////
const basicCode = async function (req, res) {
    let tokenDataInHeaders = req.headers.token
    console.log(tokenDataInHeaders)
    console.log("HEADER DATA ABOVE")
    console.log("hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)" })
}

/////////////////////////////~CreateUser~////////////////////////////////
const createUser = async function (req, res) {
    let data = req.body
    let savedData = await UserModel.create(data)
    res.send({ msg: savedData })
}

/////////////////////////////~GetUsersData~////////////////////////////////
const getUsersData = async function (req, res) {
    let allUsers = await UserModel.find()
    res.send({ msg: allUsers })
}

/////////////////////////////~Modules~////////////////////////////////
module.exports.createUser = createUser
module.exports.getUsersData = getUsersData
module.exports.basicCode = basicCode