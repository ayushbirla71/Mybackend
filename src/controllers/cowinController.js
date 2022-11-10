let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getVaccinationByDistrict = async function (req, res) {
    try {
        let { district_id, date } = req.query
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }//https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512&date=31-03-2021
        let result = await axios(options)
        console.log(result.data)
        return res.status(200).send({ msg: result.data })
    } catch (err) {
        return res.status(500).send({ msg: err })
    }

}

let getWether = async function (req, res) {
    try {
        let { q, appid } = req.query
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data)

        return res.status(200).send({ msg: result.data })
    } catch (err) {
        return res.status(500).send({ msg: err })
    }
}


let getWetherall = async function (req, res) {
    try {
        let { appid } = req.query
        let A = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let arr = []
        for (let index = 0; index < A.length; index++) {
            const element = A[index];
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${element}&appid=${appid}`
            }
            let result = await axios(options)//.selecte({data:1})
            arr.push({ city: result.data.name, temp: result.data.main.temp })
        }
        console.log(arr)
        return res.status(200).send({ msg: arr })
    } catch (err) {
        return res.status(500).send({ msg: err })
    }
}


let mimms = async function (req, res) {
    try {
        let { template_id, text0, text1, username, password } = req.query
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options)
        console.log(result.data.data)
        return res.status(200).send({ data: result.data.data })
    } catch (err) {
        return res.status(500).send({ msg: err })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getVaccinationByDistrict = getVaccinationByDistrict
module.exports.getWether = getWether
module.exports.getWetherall = getWetherall
module.exports.mimms = mimms