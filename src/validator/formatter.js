const tUpperCase=function() {
    const botcampName=("FunctionUp")
const varr=[];
for (let index = 0; index < botcampName.length; index++) {
    const element = botcampName[index].toLocaleLowerCase();
    varr.push(element)
    
}return(varr.join(''));
}

const Touppercase=function () {
    
    const botcampName=("FunctionUp")
const arr=[];
for (let index = 0; index < botcampName.length; index++) {
    const element = botcampName[index].toLocaleUpperCase();
    arr.push(element)
    
}
return(arr.join(''))
}




module.exports.tUpperCase=tUpperCase
module.exports.Touppercase=Touppercase