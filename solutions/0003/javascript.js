var primeList = [];
var currentNumber = 600851475143;

// MAIN LOOP
while(currentNumber > 1){
    var dividor = 1;
    var loop = true;
    //LOOP THROUGH POTENTIAL PRIME FACTORS
    while(loop){
        dividor ++;
        var prime = true;
        //IF POTENTIAL PRIME FACTOR IS A FACTOR
        if(currentNumber % dividor === 0){
            for(var i = 2; i < Math.ceil(Math.sqrt(dividor)); i++){
                //IF POTENTIAL PRIME FACTOR IS NOT PRIME
                if(dividor % i === 0){
                    prime = false;
                    break;
                }
            }
            //IF POTENTIAL PRIME FACTOR IS ALSO PRIME
            if(prime){
                primeList.push(dividor);
                loop = false;
                currentNumber = currentNumber / dividor;
            }
        }
    }
}

console.log(primeList[primeList.length - 1]);
