var one= document.querySelector("#one")

// function clk(){
//     one.textContent= "am clicked";
//     one.style.color="red";
// }
// one.addEventListener("click", clk)

// changing to arrow fn


one.addEventListener("click", ()=> {
    one.textContent= "am clicked";
    one.style.color="red";
})

var two= document.querySelector("#two")
two.addEventListener("dblclick",()=>{
    two.style.color="green";
    two.textContent="doubleclicked";
})

var three=document.querySelector("#three");
    three.addEventListener("mouseover", () => {
        three.style.color="blue";
        three.textContent= "mouse currently  over me";
    })

    three.addEventListener("mouseout", () => {
        three.style.color="black";
        three.textContent= "mouse currently not over me";
    })


    