var number = 3
var sum = 0;

var concatNumber = number;

for (var i = 1; i <= number; i++) {

    sum += concatNumber;
    concatNumber = concatNumber*10 + number
}

console.log('The sum of numbers:', sum);