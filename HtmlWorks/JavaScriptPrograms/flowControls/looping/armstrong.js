var number,remainder,length =0,addition = 0;
        var i=0,sum=0;
        number =123;
        for(i = number; i >= 1; i)
        {
            ++length;
            i = Math.floor(i/10);
        }
        while(number > 0)
        {
            remainder = number%10;
            addition = Math.pow(remainder,length) ;
            sum = sum+addition;

            number = parseInt(number/10);
        }
        
        console.log("sum of the value : " +sum);