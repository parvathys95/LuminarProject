// we have to create a bank applicatn
//with following functionalities
//createAccount() deposit(), withdraw() balanceEnq()



class Bank{
    
    static bankname= "SBK"
    createAccount(pname,accno,balance){
        this.person_name=pname;
        this.acc_no=accno;
        this.bal=balance;
        // this.bank_name=bankname;
    
    }
deposit(amount){
    this.balance+=amount;
    console.log("your" +Bank.bank_name+ "account credited with" +amount+ "avl bal" +this.bal)
    
}

withdraw(amount){
    if(amount>this.bal){
        console.log("insufficient balance in your account")
    }
else{

    this.balance-=amount;
    console.log("your" +Bank.bank_name+ "acc debited with" +amount+ "avl bal= " +this.bal )
}

}

balanceEnq(){
    console.log("your current acc balance = " +this.bal)
}

}

var obj= new Bank()
obj.createAccount("ajay", 1001, 2000) ;

obj.deposit(100000)
obj.withdraw(5000)

var obj2=new Bank()
obj2.createAccount("vijay", 2000, 3000)
obj2.balanceEnq()


//different type of vaiables