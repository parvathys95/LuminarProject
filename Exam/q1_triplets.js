
var list = [3, 1, 4,6,5];
var arr_size = list.length;

for ( i of list) {
 
    for ( j of list) {

        for ( k of list) {
                    if (i*i + j*j == k*k) {
                        console.log("Triplet is " + i + ", " + j + ", " + k);
                    }
                }
            }
        }


















// var list = [12, 3, 4, 1, 6, 9];
// var arr_size = list.length;

// var sum = 24;

// var i,j,k;
// for ( i = 0; i < arr_size - 2; i++) {
 
//     for ( j = i + 1; j < arr_size - 1; j++) {

//         for ( k = j + 1; k < arr_size; k++) {
//                     console.log(list[i] + list[j] + list[k]);
//                     if (list[i] + list[j] + list[k] == sum) {
//                         console.log("Triplet is " + list[i] + ", " + list[j] + ", " + list[k]);
//                         return true;
//                     }
//                 }
//             }
//         }