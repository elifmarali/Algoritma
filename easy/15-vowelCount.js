export const vowelCount = (str) => {
    /* const vowelsArr = ["a", "e", "ı", "i", "o", "ö", "ü", "u"];
    const strArr = str.toLowerCase().split("");
    let count = 0;
    for (const i of vowelsArr) {
        for (const j of strArr) {
            if (i === j) {
                console.log("i : " + i + " j : " + j)
                count += 1;
            }
        }
    }
    return count; */
    let count = 0;
    [...str.toLowerCase()].forEach((strChar) => {
        if ((/[a/e/ı/i/o/ö/u/ü]/).test(strChar)) {
            count += 1;
        }
    })
    return count;
}



/*
Vowel Count
Using the JavaScript language, have the function VowelCount(str)
take the str string parameter being passed and return the number
of vowels the string contains
(ie. "All cows eat grass" would return 5).
Do not count y as a vowel for this challenge.
*/