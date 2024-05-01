//n=434 => 4*3*4 = 48 , 4+3+4=11 result=48-11=37
// const solutions = (n) => {
//     let a, b, c;
//     let toplam = 0;
//     let carpim = 1;
//     a = Math.floor(n / 100);
//     n = n - a * 100;
//     b = Math.floor(n / 10);
//     n = n - b * 10;
//     c = n;
//     toplam = a + b + c;
//     carpim = a * b * c;
//     let result = carpim - toplam;
//     console.log(result);
// }


/* const solutions = (n) => {
    const revizeNum = n.toString().split("").map(Number);
    return revizeNum.reduce((a, b) => a * b, 1) - revizeNum.reduce((a, b) => a + b, 0)
}

console.log(solutions(434));  */


console.log(3 << 4);