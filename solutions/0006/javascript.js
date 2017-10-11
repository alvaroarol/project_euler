//SUM OF THE SQUARES
var sumOfSquares = 0;
for(var i = 1; i <= 100; i ++){
    sumOfSquares += i * i;
}

//SQUARE OF THE SUMS
var sums = 0;
for(var i = 1; i <= 100; i ++){
    sums += i;
}
var squareOfSums = sums * sums;

console.log(squareOfSums - sumOfSquares);
