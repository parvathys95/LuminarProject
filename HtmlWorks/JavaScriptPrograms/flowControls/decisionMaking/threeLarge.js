var num1= 10;
var num2 = 20;
var num3 = 30;

// if( (num1>num2) & (num1>num3)){
//     console.log("num1 is largest")
// }
// else if( (num2>num1) &(num2>num3)){

//     console.log("num2 is largest")
// }

// else if( (num3>num1) &(num3>num2)){

//     console.log("num3 is largest")
// }
// else if( (num1==num2) & (num1 == num3)){

//     console.log("numbers are equal")
// }


// second largest number

if( (num1>num2) & (num1>num3)){
    if(num2>num3){
console.log("num2 is second largest");
    }
    else{
        console.log("num3 is largest")
    }
}
else if( (num2>num1) &(num2>num3)){

    if(num1>num3){
        console.log("num1 is second largest")

    }
    else{
        console.log("num3 is second largest")

    }
}

else if( (num3>num1) &(num3>num2)){
// if(){
//     console.log("num3 is largest")

// }
// else{
//     console.log("num3 is largest")

// }


}
else if( (num1==num2) & (num1 == num3)){

    console.log("numbers are equal")
}