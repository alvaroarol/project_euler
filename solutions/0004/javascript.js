var palindromeList = [];

//LOOP THROUGH FIRST NUMBER
for(var i = 1; i <= 999; i ++){
    //LOOP THROUGH SECOND NUMBER
    for(var j = 1; j <= 999; j ++){
        if(isPalindrome(i*j)){
            palindromeList.push(i*j);
        }
    }
}

//CHECKS IF PALINDROME
function isPalindrome(number){
    var reversedNumber = number.toString().split('').reverse().join('');
    if(number == reversedNumber){
        return true;
    }
    else{
        return false;
    }
}

console.log(Math.max.apply(null, palindromeList));
