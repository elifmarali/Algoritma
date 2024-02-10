//input [555,901,899,1276,12] cift  2 sayi var ve output 2 olmali
//benim cevabim
/* const solution = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            count += 1;
        }
    }
    return count;
} */
//cikti 2 dir [1276, 12]


//input [555,901,899,1276,12] cift basamakli 2 sayi var ve output 2 olmali
const solution = (array) => {
    return array.filter(arr => arr.toString().length % 2 == 0).length
}
//cikti 4 tur [1276, 12, 33, 11]

console.log(solution([555, 901, 899, 1276, 12, 33, 11]));