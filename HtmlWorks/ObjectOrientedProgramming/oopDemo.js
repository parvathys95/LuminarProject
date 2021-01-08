
//class is a design pattern. collectn of object
//object :realworld entity
//reference :remote

//laptop-> //lenovo object

class Person {
    setPerson(age1, name1) {
        this.age = age1;
        this.name = name1;

    }
    getPerson() {
        console.log("name = " + this.name);
        console.log("age = " + this.age);
    }
}
var obj = new Person(); //creating reference
obj.setPerson(24, "ajay");
obj.getPerson()


var obj1= new Person()
obj1.setPerson(26, "sandy")
obj1.getPerson()




