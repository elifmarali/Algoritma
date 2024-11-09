export const ArithGeo = (arr) => {
    let arithmetic = true;
    let diffArithmetic = arr[1] - arr[0];
    let geometric = true;
    let diffGeometric = arr[1] / arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            if (arr[i] - arr[i - 1] !== diffArithmetic) {
                arithmetic = false;
            }
            else if (arr[i] / arr[i - 1] !== diffGeometric) {
                geometric = false;
            }
        }
    }
    if (arithmetic) {
        return "Arithmetic"
    }
    else if (geometric) {
        return "Geometric"
    }
    else {
        return -1;
    }
    //fark.every((farkItem) => farkItem === fark[1]) ? "Arithmetic" : "Geo"
}

/* Arith Geo
Using the JavaScript language, have the function ArithGeo(arr) take
the array of numbers stored in arr and return the string
"Arithmetic" if the sequence follows an arithmetic pattern or
return "Geometric" if it follows a geometric pattern.If the
sequence doesn't follow either pattern return -1. An arithmetic
sequence is one where the difference between each of the numbers is
consistent, where as in a geometric sequence, each term after the
first is multiplied by some constant or common ratio.
Arithmetic example: [2, 4, 6, 8] and
Geometric example: [2, 6, 18, 54] -
    Negative numbers may be entered as
        parameters, @will not be entered, and no array will contain all
the same elements */ 