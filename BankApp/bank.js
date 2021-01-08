class Bank {

    static getAccountDetails() {

        let data = { //data is an obj, test1 is a key ,inside braces {...values..}
            test1: { username: "test1", password: "testone", acno: 1001, balance: 50000 },
            test2: { username: "test2", password: "testtwo", acno: 1002, balance: 5000 },
            test3: { username: "test3", password: "testthree", acno: 1003, balance: 6000 },
            test4: { username: "test4", password: "testfour", acno: 1005, balance: 10000 }


        }

        return data;
    }

    static login() {
        // alert("inside login")

        let usname = document.querySelector("#uname").value;
        let pwd = document.querySelector("#pwd").value;
        // alert(usname + pwd )
        //check username is present inside dataa : return data; :
        let data = Bank.getAccountDetails()
        if (usname in data) {
            let password = data[usname]["password"];
            if (pwd === password) {
                swal("Login success!", "You provided valid data!", "success");
                setTimeout(() => window.location.href = "userHome.html", 2000);
            }

            else {
                swal("Login failed!", "You provided invalid data!", "error");
            }
        }

        else {
            alert("invalid user");
        }


    }

    static deposit() {
        let uname = document.querySelector("#uname").value
        let amt = Number(document.querySelector("#amount").value)
        let btag = document.querySelector("#bal");
        let data = Bank.getAccountDetails();
        if (uname in data) {
            data[uname]["balance"] += amt
            // alert("avlbal=" + data[uname]['balance'])

            let bal = data[uname]["balance"]
            btag.textContent = "available balance:" + bal

        }
        else {
            swal("invalid user")
        }
    }


    static withdraw() {
        let uname = document.querySelector("#uname1").value
        let amt = Number(document.querySelector("#amount1").value)
        let btag = document.querySelector("#bal");
        let data = Bank.getAccountDetails();
        if (uname in data) {
            let avlbal = data[uname]["balance"]
            if (amt > avlbal) {
                alert("insufficient balance")
            }
            else {
                data[uname]["balance"]-=amt
                // alert("avlbal=" + data[uname]['balance'])
                let bal = data[uname]["balance"]
                btag.textContent = "available balance:" + bal

            }
        }
        else {
            swal("invalid user")
        }
    }

}