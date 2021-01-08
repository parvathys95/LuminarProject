//check the given num is prime or not

var num=9;
var flag=0;

for(var i=2; i<num; i++){ // it will print 2 to 8
    // console.log(i)

    if(num % i==0){ //9%2 ==0 , 9%3==0
        flag+=1;
        break;
        console.log("not prime")
    }
    else{
        flag=0; //flg =0, 1
        console.log("prime number")
    }
}
