
// var htags= document.getElementsByTagName("h1");
// for(tgs of htags){
//     tgs.style.color="red";
// }
// var first=document.getElementById("first");
// first.style.color="green";

// var cls=document.getElementsByClassName("two");
// for(cl of cls){
// cl.style.color="blue";
// }


//using query selector

// var lst= document.querySelectorAll("li")

// for(let it of lst){
//     it.style.color="green";
// }
// var meth=document.querySelector("#mth")  // need to apply changes for only 1 elemnt so no need of for loop
// meth.style.color="cyan";

// var list=document.querySelectorAll(".lis")

// for(let ls of list){
//     ls.style.color="blue";
// }


// to access heading using js

var hone=document.querySelector("#first")
// var data = hone.textContent;
// alert(data)

//change content
hone.textContent="helloworld"

var lst=document.querySelectorAll(".lis")
lst.forEach(obj=>{
    obj.textContent="listitem";
})


var lst=document.querySelectorAll(".lis")
for(letitem of lst) {
  obj.textContent="listitem";
}



