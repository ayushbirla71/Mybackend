const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const commonM = require('./middlewares/commonMiddlewares')

/////////////////////////////~Globle routes~////////////////////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/////////////////////////////~Mongoose connection~////////////////////////////////
mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

/////////////////////////////~Globle midd~////////////////////////////////
app.use(commonM.commonMid)
app.use(
    function (req, res, next) {
        console.log("inside GLOBAL MW");
        next();
    }
);

/////////////////////////////~Globle Routes~////////////////////////////////
app.use('/', route);

/////////////////////////////~PORT~////////////////////////////////
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
