class Employee {
    constructor(eid, ename, design, sal) {
        this.eid = eid;
        this.ename = ename;
        this.design = design;
        this.sal = sal;

    }
    getEmp=()=> { //nameless fn

        console.log(this.ename)
        console.log(this.design)
        console.log(this.sal)
    }
}
var obj1 = new Employee(1001, "ajay", "developer", 25000)

var obj2 = new Employee(1002, "arya", "java developer", 20000)
// obj2.getEmp();

var obj3 = new Employee(1003, "sandy", "python developer", 35000)
// obj3.getEmp();

var emp=[];
emp.push(obj1);
emp.push(obj2);
emp.push(obj3);

//print all employees who have salary > 22000

for (e of emp){
    if(e.sal>22000){
        console.log(e.ename)
    }
}

//print all employees whos desig =developer

for (e of emp){
    if(e.design== "developer"){
        console.log(e.ename+ e.design)
    }
}






