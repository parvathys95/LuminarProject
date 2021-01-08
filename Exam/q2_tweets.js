var array = ["sachin tweet1", "sehwag tweet1", "kohli tweet1", "sachin tweet2", "kohli tweet1"];
array.sort();
var data = {};
var noOfOccurArray = array[0], maxCount = 1;
var cnt = 0;
var current = null;
for(i of array )
{
    if (i != current) {
        if (cnt > 0) {
            console.log(current + ' comes --> ' + cnt + ' times');
        }
        current = i;
        cnt = 1;
    } else {
        cnt++;
    }
    var el = i;
    if(data[el] == null)
        data[el] = 1;
    else
        data[el]++;  
    if(data[el] > maxCount)
    {
        noOfOccurArray = el
        maxCount = data[el];
    }
}
if (cnt > 0) {
    console.log(current + ' comes --> ' + cnt + ' times');
}
console.log(noOfOccurArray);