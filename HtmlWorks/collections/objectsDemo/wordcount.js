var data = "hello hai hello hai hello";

//hello 3 hai 2

// splittng data by using space
var words = data.split(" "); // words = [ 'hello', 'hai', 'hello', 'hai', 'hello' ]

var obj = {}    // object key value pair
for (word of words) { //first iteratn hello comes
    if (word in obj) { // checking hello key is present in obj
        obj[word] += 1;
    }
    else {
        obj[word] = 1;  //{hello:1, hai:1} : next iteratn  hello already in obj so value increment by 1
    }
}
console.log(obj)

