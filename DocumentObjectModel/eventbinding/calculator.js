var txt= document.querySelector("#txt");

function display(num){
    txt.value+=num;
}

clrscr=()=>{
    txt.value="";
}

ev=()=>{
    let data=eval(txt.value);
    txt.value=data;
}

