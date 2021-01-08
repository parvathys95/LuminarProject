var arr = [1, 2, 3, 4, 5, 6, 7]
// var element= prompt("enter element for searching")

// alert(element)



// Prog1..this is linear searching prog... in this prog complexity is high
var element = 6;
var flag = 0;
for (data of arr) {
    if (element == data) {
        flag = flag + 1;
        break;
    }

}
if (flag > 0) {
    console.log("element found")
}
else{
    console.log("element not found")

}