/* Binomial coefficient of a lattice path, where n and k are the numbers of "steps" in each direction (horizontal and vertical):

(n + k)! / (k! * ((n + k) - k)!)

*/

function factorial(number){
    var i = 1;
    for(var j = 2; j <= number; j ++){
        i = i * j;
    }
    return i;
}

var binomialCoefficient = factorial(20 + 20) / (factorial(20) * factorial(20 + 20 - 20));

console.log(binomialCoefficient);
