
//find least positive missing number // 

var arr = [ -1, 0, 1, 3]


var cnt=1;
for(item of arr){
    if(arr.includes(cnt)){
        
    }
    else{
        console.log(cnt+ "is missing")
        break;
    }
    cnt+=1;

}


// que

// var arr= [2,4,5] // output [9,7,6]
// var arr=[4,8,2]


//wrong

// var lowest = -1;
// for (i = 0;  i < arr.length;  ++i) {
//   if (arr[i] != i) {
//     lowest = i;
//     break;
//   }
// }
// if (lowest == -1) {
//     lowest = arr[arr.length - 1] + 1;
// }
// console.log("Least positive missing number = " + lowest);





// var smallest = arr[0];
// var val=0;
// for(var i=1; i<arr.length; i++){
    
//     if(arr[i] < smallest){
//         smallest = arr[i];
//         val = smallest+1; 
//         console.log("val"+val)  
//     }
// }

// console.log(smallest);
