var pattern = "ABABABAC"

//find first recursive character

var obj = {}

for (char of pattern) {
    console.log(char) //one by one checking
    if (char in obj) {
        console.log("first recursive charcter is" + char)
    break;
    }
    else {
        obj[char] = 1
    }
}

// for(i = 0; i < pattern.length; i++){
//     if([pattern[i]]){
//        return [pattern[i]];
//     }else{
//         [pattern[i]] = i;
//     }
//  }

// console.log(pattern);