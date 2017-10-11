var startingNumber = 1;
var highestChainNumber = 1;
var highestChain = 0;

while(startingNumber < 1000000){
    var currentNumber = startingNumber;
    var currentChain = 0;
    while(currentNumber > 1){
        if(currentNumber % 2 === 0){
            currentNumber = currentNumber / 2;
        }
        else{
            currentNumber = 3 * currentNumber + 1;
        }
        currentChain ++;
    }
    if(currentChain > highestChain){
        highestChain = currentChain;
        highestChainNumber = startingNumber;
    }
    startingNumber ++;
}

console.log(highestChainNumber);
