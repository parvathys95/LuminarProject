class Student{
    
    static get collegeName(){
        clgname="Luminar";
        return clgname;
    }
    static printCollegeName(){
        var clgname="Luminar"
        console.log(clgname)
    }

setStudent(rol,name){
    this.rol=rol;
    this.name=name;

}
getStudent(){
    console.log("rol= " +this.rol);
    console.log("name= " +this.name);
    Student.printCollegeName(); //static method name ca be accesed by using class name

}
}
class MyClass extends Student{}
 var ob=new MyClass();
 ob.setStudent(1001,"sandy");
 ob.getStudent()
 console.log(MyClass.collegeName);





