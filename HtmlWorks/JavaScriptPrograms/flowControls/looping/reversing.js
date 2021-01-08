// 123 o/p 321

var num=123;
var reverse=0;
while(num>0){
var digit= num % 10; //123 %10 ..// digit=3
reverse = reverse * 10 + digit;

// console.log(digit); //321
num=Math.floor(num/10)// num=123/10 = 12.3 .. 12/18=1.2-1 .. 1/10-=0
}
console.log(reverse)

// num= 121  1 cube + 2 cube + 1 cube = 10

//print sum of cube of each digits.. armstrong

