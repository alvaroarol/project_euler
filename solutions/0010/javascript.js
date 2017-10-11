var currentNumber = 2;
var sumOfPrimes = 2;

while(currentNumber < 2000000){
    var primeBool = true;
    for(var i = 2; i <= Math.ceil(Math.sqrt(currentNumber)); i++){
        if(currentNumber % i === 0){
            primeBool = false;
            break;
        }
    }
    if(primeBool){
        sumOfPrimes += currentNumber;
    }
    currentNumber ++;
}

console.log(sumOfPrimes);
