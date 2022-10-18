const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


////////////////////////////////////////(no 01)////////////////////////////////////////////////////


let Movies =['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

router.get('/movies',function (req, res){
    console.log("The path params in the request are : ", req.params)
    

    res.send(Movies)
})
/////////////////////////////////////////////( no 02)///////////////////////////////////////////////////

router.get('/movies/:indexNumber' ,function(req, res){
    let nee=req.params.indexNumber
    let movieNM=Movies[nee]
    console.log('movies index is :',nee.indexNumber)
    if(movieNM<0 || movieNM>=Movies.length){
        return res.send('The index value is not correct, please check the it')
    }
    res.send(movieNM)
})


///////////////////////////////////////(n0 04)////////////////////////////////////////

let varr=[ {
    id: 1,
    name: 'The Shining'
   }, {
    id: 2,
    name: 'Incendies'
   }, {
    id: 3,
    name: 'Rang de Basanti'
   }, {
    id: 4,
    name: 'Finding Nemo'
   }]
router.get('/films',function(req, res){
    
    
    res.send(varr)
       
    
})

////////////////////////////////////////////(no 05)////////////////////////////////////////////////////////////
router.get('/films/:filmId',function(req, res){
let abc=req.params.filmId
for (let index = 0; index < varr.length; index++) {
    const element = varr[index];
    if(element.id==abc){
        // console.log(element
        return res.send(element)
        
    }
    
    }
    res.send("The film id doesnt match any movie")
    
})



// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;

