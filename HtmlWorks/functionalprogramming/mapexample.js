var arr=[1,2,3,4,5,6,7,5]

// var op=arr.map(num=>num>5?(num+1):(num-1))
 var op=arr.map(num=>num>5?num+1 : num<5?num-1:num)

console.log(op)



