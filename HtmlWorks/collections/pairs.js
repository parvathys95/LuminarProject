// var num=[1,2,3,4]



// var res  = 4
// for(number1 of num){
//     for(number2 of num){
//         value = number1 + number2;
//         if(value == res){
// console.log(res +" pairs are" + number1+ " " +number2)
//         }
//     }
// }

// prog complexity is high so need to write simple complex prog



var arr = [2, 1, 3, 4]
var sarr = arr.sort((num1, num2) => num1 - num2)
console.log(sarr) // print sorted aray

low = 0;
upp = sarr.length-1;
var number = 6;

while (low < upp) {
    var res = sarr[low] + sarr[upp]; //1 +4=5
    if (res == number) { //6==5
        console.log("pairs=" + sarr[low]+ "," +sarr[upp])

        break;
    }
    else{
        low+=1; //low=1
    }



    }
