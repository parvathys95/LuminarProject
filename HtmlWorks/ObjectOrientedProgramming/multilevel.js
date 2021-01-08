class Parent{
    m1(){
        console.log("inside Parent")
    }
}

class Child extends Parent{
    m2(){
        console.log("inside first child")
    }
}
class subChild extends Child{ 
    m3(){
        console.log("inside subchild")
    }
}

var sb= new subChild();
    sb.m3();
    sb.m2();
    sb.m1();

    



