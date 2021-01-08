var arr=[1,2,3,4,5,6]

var tot=arr.reduce((num1,num2)=>num1+num2)
// num1 1 num2 2= 3 :num1 3 + 3 = 6 : num1=6 + 4....
console.log(tot);

var high= arr.reduce((num1,num2)=>num1>num2?num1:num2)


console.log(high)