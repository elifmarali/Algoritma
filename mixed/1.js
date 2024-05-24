// [8,4,6,2,3] => output => [4,2,4,2,3] => birbirinden cikararak ilerleme metotolari 
// 8 den 4 cikar mi? evet 4 yazdik 
// 4 den 6 cikar mi? hayir bir sonrakine gectik 4 den 2 cikar mi? evet 2 yazdik
// 6 dan 2 cikar mi? evet 4 yazdik 
// 2 den 3 cikar mi? hayir sonrasinda da bir sey olmadigi icin 2 yazdik
// 3 den sonra bir sey olmadigi icin 3 yazdik 
const arr = [8, 4, 6, 2, 3]
const solution = (array) => {
    return array.map((_, i) => {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                array[i] = array[i] - array[j];
                break;
            }
        }
        return array[i];
    }
    )
}
console.log(solution(arr));