class Employee {
    constructor(eid, name, design,join, resign) {
        this.eid = eid;
        this.name = name;
        this.design = design;
        this.join = join;
        this.resign = resign;

    }
    getEmp=()=> { 

        console.log(this.ename)
        console.log(this.design)
        console.log(this.sal)
        console.log(this.join)
        console.log(this.resign)
        
    }
}

var obj1=new Employee(100, "ajay" , "devop", 1981, 2003)
var obj2=new Employee(101, "vijay" , "devop", 1992, 2008)
var obj3=new Employee(102, "bijoy" , "ba", 1999, 2007)
var obj4=new Employee(103, "jhon" , "ba", 1989, 2010)
var obj5=new Employee(104, "danie" , "qa", 2009, 2014)
var obj6=new Employee(105, "lari" , "qa", 1987,2010)

var emp=[]
emp.push(obj1);
emp.push(obj2);
emp.push(obj3);
emp.push(obj4);
emp.push(obj5);
emp.push(obj6);

//Q1: print all employee name and designation only
console.log(" print all employee name and designation only")
var empdetail= emp.map(obj=> "name =" +obj.name +  "," + "designation=" +obj.design)
console.log(empdetail)

//Q2: print all employee details whose designatn= "devop"
console.log("print all employee details whose designatn = devop ");
var designdetail= emp.filter(obj=>obj.design=="devop")
console.log(designdetail)

//Q3: print all employee details who are working in 80s
console.log("print all employee details who are working in 80s")
var yeardetail= emp.filter(obj=>obj.join>=1980 & obj.join<1990)
console.log(yeardetail)

//Q4 : print employee details who have experience >9 years 
console.log("print employee details who have experience >9 years ")
var expdetail= emp.filter(obj=> ((obj.resign- obj.join)>9))
console.log(expdetail)

//Q5:Sort all employees based on their joining year
console.log("Sort all employees based on their joining year")
var empyear= emp.sort( (ob1,ob2)=> ob1.join-ob2.join )
console.log(empyear)





