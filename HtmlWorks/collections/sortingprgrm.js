var arr=[10,2,4,11]

//10>2  [2 10 4 11]
//2>4
//2>11 []
//10>4 [2 4 10 11]
//4>11


// for(var i=0; i<arr.length; i++){
//   for(var j=i+1; j<arr.length;j++){
//       if(arr[i]> arr[j]){
//           var temp=arr[i];
//           arr[i]=arr[j];
//           arr[j]=temp;
//       }
//   }
// }
// console.log(arr)




var arr= arr.sort((i,j)=>i-j)  //(i-j) read as i comes before j 10 11 i-j
console.log(arr)




