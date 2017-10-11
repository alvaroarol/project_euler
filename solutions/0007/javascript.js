var primePosition = 0;
var currentNumber = 2;

while(primePosition < 10001){
    var primeBool = true;
    for(var i = 2; i < currentNumber; i++){
        if(currentNumber % i === 0){
            primeBool = false;
            break;
        }
    }
    if(primeBool){
        primePosition ++;
    }
    currentNumber ++;
}

console.log(currentNumber - 1);
