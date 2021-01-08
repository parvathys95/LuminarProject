//OBJECTS

// data are stored in key value form

var student= {rol:1001, name:"ajay",course:"mca"}

//key: rol, name , course

console.log(student)


//to fetch value we have to use corresponding key

console.log(student["name"]) // one method
console.log(student.name)  // other method


// total 150 add
student["total"]= 150;  // to add new record
console.log(student)


//searching for key in this object
//eg: search gender key

console.log("gender" in student) // return false
console.log("name" in student)


//updating object

student["total"]+=25;
console.log(student.total)

