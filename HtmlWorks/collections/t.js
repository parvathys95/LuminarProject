var arr = [ 0, 1,2, 4, 5,7];

var lowest = -1;
for (i = 0;  i < arr.length;  ++i) {
  if (arr[i] != i) {
    lowest = i;
    break;
  }
}
if (lowest == -1) {
    lowest = arr[arr.length - 1] + 1;
}
console.log("Least positive missing number = " + lowest);
