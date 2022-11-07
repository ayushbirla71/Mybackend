const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

////////////////////////////////~CreateUser~/////////////////////////////////////////
const createUser = async function (abcd, xyz) {
  try {
    let data = abcd.body;
    let savedData = await userModel.create(data);
    xyz.send({ msg: savedData });
  }
  catch (error) {
    res.status(500).send({ msg: error.message })
  }
};

//////////////////////////////~LoginUser~///////////////////////////////////////////
const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
      });
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FUnctionUp",
      },
      "functionup-thorium"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, data: token });
  }
  catch (error) {
    res.status(500).send({ msg: error.message })
  }
};

//////////////////////////////////////////~GetUserData~///////////////////////////////
const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });
    res.send({ status: true, data: userDetails });
  }
  catch (error) {
    res.status(500).send({ msg: error.message })
  }
};

////////////////////////////////////////~UpdateUser~///////////////////////////////////
const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.send("No such user exists");
    }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.send({ status: updatedUser, data: updatedUser });
  }
  catch (error) {
    res.status(500).send({ msg: error.message })
  }
};

///////////////////////////////////////~PostMessage~///////////////////////////////////
const postMessage = async function (req, res) {
  try {
    let message = req.body.message
    let user = await userModel.findById(req.params.userId)
    if (!user) return res.send({ status: false, msg: 'No such user exists' })
    let updatedPosts = user.posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })
    return res.send({ status: true, data: updatedUser })
    // console.log(message)
  }
  catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
