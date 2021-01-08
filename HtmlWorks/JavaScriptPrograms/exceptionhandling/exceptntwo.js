// try{
// var data= "10+2$5*8+4*8"

// var res= eval(data) //eval is a fn in java script to evaluate expression

// console.log(res)
// }
// catch(err){
//     var data= 
// }

var age=17;
try{
    if(age<=18) throw "not able to create acc"
}
catch(err){
    console.log(err)
}