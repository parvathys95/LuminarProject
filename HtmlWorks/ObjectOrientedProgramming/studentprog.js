class Student{
    setStudent(rolno, name, course,tot) {
        this.studrollno = rolno;
        this.studname = name;
        this.studcourse = course;
        this.total = tot;

    }
    printStudent() {
        console.log("RollNum = " + this.studrollno);
        console.log("Name = " + this.studname);
        console.log("Course= " + this.studcourse)
        console.log("Total " + this.total)
    }

}

var obj = new Student(); //creating reference
obj.setStudent(24, "Parvathy" , "MCA" , "3");
obj.printStudent()