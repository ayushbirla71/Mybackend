const express = require('express');
const router = express.Router();///test-you
//importing a custom module

const xyz1 = require('../logger/logger1')
const xyz2 = require('../util/helper.js')
const xyz3 = require('../validator/formatter.js')
//importing external package
const chunk = require('chunk')
var union = require('arr-union');
// const tail = require('tail')
const lodash=require('lodash')
var _tail = require('lodash/tail');

const objectFromPairs = require('object-from-pairs')

//console all import folder

router.get('/test-me', function (req, res) {
    console.log("about me:",xyz1.myname());
    console.log("pritn date:",xyz2.printDate)
    console.log("pritn month:",xyz2.printMonth)
    console.log("getBatchInfo:",xyz2.getBatchInfo(
    ))

    console.log("changetoLowerCase:" ,xyz3.tUpperCase())
    console.log("changetoUpperCase:" ,xyz3.Touppercase())


    //Problem 04 A
    //month name array using "chunk"
    
    let myArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
     const result= chunk(myArray,2)
    console.log("The result of underscores examples api is : ", result)

    //B). 10 odd numbers. Using the tail function, using "tail"

  
    const oddNum=[1,3,5,7,9,11,13,15,17,19]
   
    console.log(_tail(oddNum, 9))




    

    //C). Create 5 arrays of numbers containing using "union"

    const finalresult=union(['1'], ['2', '2'], ['3', '4', '5', '5']);
    console.log("unique values :",finalresult)

    //D). create an object containing key value pairs using "fromPairs"

    const contener = [ ['horror','The Shining'], ['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]

    
 
    console.log(objectFromPairs(contener))
    
    res.send('My first ever api!')
});

// router.get('/test-me', function (req, res) {
//     //Calling the components of a different custom module
//     console.log("Calling my function ",xyz.myFunction())
//     console.log("The value of the constant is ",xyz.myUrl)
//     //Trying to use an external package called underscore
//     let myArray = ['Akash', 'Pritesh', 'Sabiha']
//     let result = underscore.first(myArray)
//     console.log("The result of underscores examples api is : ", result)
    
//     res.send('My first ever api!')

//     //To be tried what happens if we send multiple response
//     //res.send('My second api!')
// });

module.exports = router;

