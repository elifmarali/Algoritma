export const exOh = (str) => {
    const arr = str.split("");
    const strInfo = { xCounter: 0, oCounter: 0 };
    arr.forEach((arrItem) => {
        if (arrItem === "x") {
            strInfo.xCounter += 1;
        } else {
            strInfo.oCounter += 1;
        }
    })

    if (strInfo.xCounter === strInfo.oCounter) {
        return true
    } else {
        return false
    }


}

/*
Ex Oh
Using the JavaScript language, have the function
ExOh(str) take the str parameter being passed and
return the string true if there is an equal number
of x's and o's, otherwise return the string false.
Only these two letters will be entered in the
string, no punctuation or numbers.
For example: if str is "xooxxxxooxo" then the
output should return false because there are 6 x's and 5 o's.
*/