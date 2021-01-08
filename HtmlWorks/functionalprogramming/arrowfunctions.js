// //arrow funtions

// //nameless

// f=(num1,num2)=>num1+num2;
// console.log(f(10,20));

// f1=(num1,num2)=>num1-num2;
// console.log(f1(30,15));

// f2=(num1,num2)=>num1*num2;
// console.log(f2(5,2));

// f3=(num1,num2)=>num1/num2;
// console.log(f3(50,10));

// //cube

// f4=(num1)=>num1**3;
// console.log(f4(3));


//q1

var ar=[1,2,3,4,5,6,7,8]
// var sq=[];
// for (item of ar){
// sq.push(item**2)
// }

// console.log(sq)

// using map

// function square(num){
//     return num*num;
// }
var squares =ar.map((num)=>num*num);
console.log(squares);

//(num)=>num*num //arrow fn

var evens= ar.filter((num)=>num%2==0)

console.log(evens)


 