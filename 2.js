// input [[4,3,2,-1],[3,-2,-2,6],[5,-4,0,-1]] kac adet - (negatif) deger oldugunun ciktisini veren kod parcasi
//5

//1. yontem
/* const solution = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] < 0) {
                newArray.push(array[i][j]);
            }
        }
    }
    return newArray.length;
} */


// 2. yontem
const solution = (array) => {
    return array.map(row => row.filter(r => r < 0).length).reduce((a, b) => a + b, 0)
}


console.log(solution([[4, 3, 2, -1], [3, -2, -2, 6], [5, -4, 0, -1]]));