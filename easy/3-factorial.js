/* First Factorial
Using the JavaScript language, have the function FirstFactorial(num)
take the num parameter being passed and return the factorial of it ie.
if num - 4, return (4 * 3 * 2 * 1)). For the test cases, the range will
be between 1 and 18. */
export const FirstFactorial = (num) => {
    let result = 1;
    if (num >= 1 && num <= 18) {
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    } else {
        return "enter a valid value"
    }
}
