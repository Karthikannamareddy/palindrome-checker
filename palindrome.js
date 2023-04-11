function palindrome(str) {
    let isPalindrome=true;
    let myStr=str.toLowerCase().match(/[a-z0-9]/g);
    let myStrLen=myStr.length;
    for (let i=0; i<Math.round(myStrLen/2); i++) {
      if (myStr[i] != myStr[myStrLen-(i+1)]) { 
        isPalindrome=false;
        break;
      }
    }
    // Good luck!
    return isPalindrome;
  }