class Employee{

    //constructor

    constructor(eid,ename){
        this.eid=eid;
        this.ename=ename;
    }
    getEmployee(){
        console.log("eid= " +this.eid)
        console.log("eid= " +this.ename)

    }
}
var emp=new Employee(100,"sandy");
// emp.setEmployee();
emp.getEmployee();
//duty of setEmployee() is initializing instance variable


