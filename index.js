function checkPalindrome(str){
    const re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re,'');
    let len = str.length
    for (let i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
      }
      return true;
}


console.log(checkPalindrome('madam'))
console.log(checkPalindrome('abcdef'))
console.log(checkPalindrome('racecar'))
console.log(checkPalindrome('taco cat'))