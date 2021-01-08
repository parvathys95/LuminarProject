

var num= Number(document.querySelector("#num").value);
var hd=document.querySelector("h1")

calc=()=>{
    let res=num**3;
    // alert("result is" +res);
    hd.textContent=res;
}