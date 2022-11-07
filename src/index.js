const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

////////////////////~Globle Routes~/////////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//////////////////~Mongoose Connection~////////////////
mongoose.connect("mongodb+srv://ayush8120:GeGo5qhr7wM6VQyg@cluster0.n1nevi5.mongodb.net/Ayush8120?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

///////////////////~Globle Routes~/////////////////////
app.use('/', route);

///////////////////~PORT~///////////////////////////////
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
