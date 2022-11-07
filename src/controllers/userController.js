const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

/////////////////////~CreateUser~////////////////////////
const createUser = async function (abcd, xyz) {
  try {
    let data = abcd.body;
    let savedData = await userModel.create(data);
    console.log(abcd.newAtribute);
    xyz.status(201).send({ msg: savedData });
  }
  catch (errer) {
    xyz.status(400).send({ mag: errer.message })
  }
}

//////////////////////~LoginUser~//////////////////////
const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(400).send({
        status: false,
        msg: "username or the password is not corerct",
      });
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FunctionUp",
      },
      "functionup-plutonium-very-very-secret-key"
    );
    res.setHeader("x-auth-token", token);
    res.status(201).send({ status: true, token: token });
  }
  catch (errer) {
    res.status(500).send({ mag: errer.message })
  }
};

/////////////////////////////~GetUserData~/////////////////////////////
const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(400).send({ status: false, msg: "No such user exists" });
    res.status(200).send({ status: true, data: userDetails });
  }
  catch (errer) {
    res.status(500).send({ mag: errer.message })
  }
};

///////////////////////////~UpdateUser~/////////////////////////////////
const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //console.log(user)
    if (!user) {
      return res.status(400).send("No such user exists");
    }
    let userData = req.body;
    console.log(userData)
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(201).send({ status: userData, data: updatedUser });
  }
  catch (errer) {
    res.status(500).send({ mag: errer.message })
  }
};

/////////////////////////////////~DeleteUser~///////////////////////////////////
const DeletUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).send("No such user exists");
    }
    console.log(user)
    let userData = req.body;
    let deletee = userData.isDeleted
    console.log(userData)
    let DeleteUser = await userModel.findOneAndUpdate(userId, { $set: userData }, { new: true });
    res.status(201).send({ status: DeleteUser, data: userData });
  }
  catch (errer) {
    res.status(500).send({ mag: errer.message })
  }
};

///////////////////////////////////////~Module~///////////////////////////
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.DeletUser = DeletUser