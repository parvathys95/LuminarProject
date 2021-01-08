function primeRange(low,upp){


    for(i=low;i<=upp;i++){ //(3,10)i=3,4,5,6,7,8,9,10 i=3
        var flg=0;

        for(j=2;j<i;j++){
            if(i%j==0){ //3%2==0
                flg+=1;
                break;
            }
        }
        if(flg==0){
            console.log(i)
        }
    }


}
primeRange(3,10)
