var arr =[5,3,4]
var total = 0;
for (item of arr){
    total=total + item;
}

var output=[]
//total=12
for(item of arr){
var element=total-item; //12-5 =7 : 12-3 =9
output.push(element);

}
console.log(output)

