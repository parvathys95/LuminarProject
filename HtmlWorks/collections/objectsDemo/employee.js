var employee={eid:1001, ename: "arya" , design: "devops"}

console.log(employee)

//printing
console.log(employee.ename)

//chk for salary
console.log("salary" in employee)


//salary 25000

employee["salary"]=25000;
console.log(employee)

employee["salary"]+=5000;
console.log(employee)

for(key in employee){
    console.log(key+ "," +employee[key])
}






