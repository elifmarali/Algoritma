export const palindromWordAlg = (str) => {
    const strArr = str.trim().toLowerCase().split("").reverse().join("");
    if (strArr === str.trim().toLowerCase()) return true;
    else return false;
    return strArr;

}


/* Palindrome
Using the JavaScript language, have the function Palindrome(str)
take the str parameter being passed and return the string true if
the parameter is a palindrome, (the string is the same forward as
    it is backward) otherwise return the string false.
For example: "racecar" is also "racecar" backwards.
--Punctuation and numbers will not be part of the string. */