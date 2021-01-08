var data = "hello hai hello hai hello hai hello hai hai jai";


var words = data.split(" "); 
var obj = {}    
for (word of words) {
    if (word in obj) { 
            obj[word] += 1;
    }
    else {
        obj[word] = 1;  
    }
}
console.log(obj)
//{hello:4,jai:5 , jai:1}

// find most repeting word

var arr=[]
for(key in obj){
    var num=obj[key];
    arr.push(num)
}
var srt=arr.sort((a,b)=> b-a) //[5,4,1]
// arr=arr.sort((a,b)=> b-a)
var elem=srt[0]
for(key in obj){
    if(elem==obj[key]){
    console.log(key)

}
}


