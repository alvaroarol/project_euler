var currentStep = 2;
var previousStep = 1;
var evenSum = 0;

while(currentStep <= 4000000){

    if(currentStep % 2 === 0){

        evenSum += currentStep;

    }

    var bufferStep = currentStep;

    currentStep += previousStep;
    previousStep = bufferStep;

}

console.log(evenSum);
