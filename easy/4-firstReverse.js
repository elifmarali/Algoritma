export const firstReverse = (str) => {
    const arr = str.split("")
    const reverseArr = arr.reverse();
    const reverseStr = reverseArr.join("");
    return reverseStr;
    // return str.split("").reverse().join("")
}

/*
First Reverse
Have the function FirstReverse()) take the
str parameter being passed and return
the string in reversed order.
*/
// split stringi array e cevirir
//reverse diziyi ters cevirir
// join ile arrayden stringe cevir