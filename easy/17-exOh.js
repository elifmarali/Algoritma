export const exOh = (str) => {
    const counter = { x: 0, o: 0 };
    const strArr = str.split("");
    strArr.map((str) => {
        str === 'o' ? counter.o += 1 : counter.x += 1;
    })
    if (counter.o === counter.x) {
        return true;
    } else {
        return false;
    }
};


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