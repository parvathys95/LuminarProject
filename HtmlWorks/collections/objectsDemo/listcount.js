var arr=[10,10,20,20,30,31,32,31]


// var list= data.split(" "); // already split so no need to split
var cnt= {}

for(num of arr){
if (num in cnt){
    cnt[num] +=1;
}
else{
    cnt[num] =1;

}
}
console.log(cnt)

