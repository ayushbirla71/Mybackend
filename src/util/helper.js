var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
// console.log(today);

const getBatchInfo=function() {
    const batchName="Lithium"
    const week="W3"
    const Day="D3"
    const todayTopic="Nodejs module system"
    return ( (batchName)+" "+(week)+(Day)+" "+(todayTopic));
}
// console.log(getBatchInfo())


module.exports.printDate=dd
module.exports.printMonth=mm
module.exports.getBatchInfo=getBatchInfo