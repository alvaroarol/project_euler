var loop = true;
var number = 1;
//CHECK EVERY NUMBER UNTIL FIRST ONE IS FOUND
while(loop){
    var solution = true;
    //CHECK FOR DIVISION BY 1 THROUGH 20
    for(var i = 1; i <= 20; i ++){
        if(number % i !== 0){
            solution = false;
            break;
        }
    }
    //IF NUMBER IS SOLUTION, GET OUT OF LOOP
    if(solution){
        loop = false;
    }
    //IF NUMBER ISN'T SOLUTION, ADD 1 TO NUMBER AND RESTART LOOP
    else{
        number ++;
    }
}

console.log(number);
