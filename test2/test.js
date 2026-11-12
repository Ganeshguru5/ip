function isPalindrome(s) {

  // Your solution here
  
  const reverse = s.toLowerCase().split("").reverse().join("")
  return reverse === s.toLowerCase()
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("Madam"));   // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello"));   // false