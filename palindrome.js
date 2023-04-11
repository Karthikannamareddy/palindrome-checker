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
  }:
  
  palindrome("eye");
// should return a boolean.

// palindrome("eye"); 
// should return true.

// palindrome("_eye"); 
// should return true.

// palindrome("race car"); 
// should return true.

// palindrome("not a palindrome"); 
// should return false.

// palindrome("A man, a plan, a canal. Panama"); 
// should return true.

// palindrome("never odd or even"); 
// should return true.

// palindrome("nope"); 
// should return false.

// palindrome("almostomla"); 
// should return false.

// palindrome("My age is 0, 0 si ega ym."); 
// should return true.

// palindrome("1 eye for of 1 eye."); 
// should return false.

// palindrome("0_0 (: /-\ :) 0-0"); 
// should return true.

// palindrome("five|\_/|four"); 
// should return false.




// freeCodeCamp javaScript algorithms and data structures challenge link is given below:

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
