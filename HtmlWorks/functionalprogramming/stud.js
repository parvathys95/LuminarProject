class Student{
    constructor(rol,name,course,total){
        this.rol=rol;
        this.name=name;
        this.course=course;
        this.total=total;
    }

    getStudent=()=>{
        console.log(this.rol);
        console.log(this.name)
    }
}

var obj1=new Student(1001, "sandy" , "mtech", 145)
var obj2=new Student(1002, "arya" , "mca", 150)
var obj3=new Student(1003, "achu" , "bca", 135)

var ar=[];
ar.push(obj1);
ar.push(obj2);
ar.push(obj3);

//total >135

var stud= ar.filter(obj=>obj.total>135)

for(st of stud){
    console.log(st.name)

}
//console.log(stud)
var cfilter=ar.filter(obj=>obj.course=="bca")
console.log(cfilter)

//total sum or max ( numbers) 

// var total = cfilter.map(obj=>obj.total).reduce((obj1,obj2)=>obj1+obj2)
var maxtotal= ar.map(obj=>obj.total).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2)

console.log(maxtotal)


//print student info of max total
//print student info lowest total

var topstud=ar.filter(obj=>obj.total==maxtotal)
for(stud of topstud){
     stud.getStudent();
}

console.log(topstud)
console.log("sorted order")

var srtstud= ar.map(obj=>obj.total).sort((obj1,obj2)=>obj1.obj2)

console.log(srtstud)




//q1: create class for employee eid ename design saary
// q2 print highest salary employee info
//q3 print lowest salary emp info

//q4 print employee salary in sorted order



// covered portion
//map( ), filter() , reduce()





