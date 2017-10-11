var solution = 0;

for(var i = 1; i < 1000; i ++){
    for(var j = 1; j < 1000; j ++){
        if(i + j + Math.sqrt(i * i + j * j) === 1000){
            solution = [i, j, Math.sqrt(i * i + j * j)];
        }
    }
}

console.log(solution[0] * solution[1] * solution[2]);
