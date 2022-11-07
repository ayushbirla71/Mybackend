
//////////////////////////////~Midd~///////////////////////////////
const mid1 = function (req, res, next) {
    req.falana = "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}
//////////////////////////////~midd2~///////////////////////////////
const mid2 = function (req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}
/////////////////////////////~Midd3~////////////////////////////////
const mid3 = function (req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}
/////////////////////////////~Midd4~////////////////////////////////
const mid4 = function (req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}
/////////////////////////////~CommonMid~////////////////////////////////
const commonMid = function (req, res, next) {
    const url = req.url
    const ip = req.ip
    var currentdate = new Date();
    var datetime = currentdate.getFullYear() + "-" + currentdate.getMonth()
        + "-" + currentdate.getDay() + " "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    console.log(datetime, ',', ip, ',', url)
    next()
}

/////////////////////////////~Modules~////////////////////////////////
module.exports.mid1 = mid1
module.exports.mid2 = mid2
module.exports.mid3 = mid3
module.exports.mid4 = mid4
module.exports.commonMid = commonMid