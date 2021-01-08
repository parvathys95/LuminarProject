// // PROCEDURE BINSEARCH(arr,low,upp,mid,element)


// // step 1: input always be a sorted array
// var arr=[1,2,3,4,5,6,7,8]


// //step 2: 
// //low <-0 upp <-8

// var low=0;
// var upp= (arr.length)-1; // 7
// console.log(upp)


// // step3: calculate mid value .. mid= (low + upp)/2    mid= 0 + 8/2 =4
//  var mid = Math.floor((low+upp)/2);
// // var mid= (low+upp)/2; // other way of mid checking

// console.log(mid)
// var element=6;
// // case1
// //var arr=[1  ,  2,3,4,5,6,7,8]

// //element > arr[mid] 6 > arr[4]  if this case is true then low=mid+1



// //case2



// //case3




var arr = [1, 2, 3, 4, 5, 6, 7, 8]

var low = 0;
var element = 6;
var flag=0;
var upp = (arr.length) - 1; //7 
while (low < upp) { //0<7 true :: next:: 4<7
    mid = Math.floor((low + upp) / 2); //mid= 0+ /2 =3.5 ==3    ::   mid= 4+7/2= 5.5 ie mid =5 
    if (element > arr[mid]) { // 6>arr[3] 6>4 //true    : 6>6
        low = mid + 1; //low= 3+1 ::
    }
    else if(element < arr[mid]){
    upp =mid-1;
    }
    else if(element == arr[mid]){
        flag+=1;
        break;
    }
}

if(flag>0){
    console.log("element found");

}
else{
    console.log("element  not found");

}




