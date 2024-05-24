//input= 5 =>  5 elemanli bir array olurturulsun ama elemanlari toplamlari 0 etsin [-2,-1,0,1,2]

/* const solution = (n) => {
    let newArr = [];
    if (n % 2 == 1) {
        newArr.push(0)
    }
    for (let i = 1; i < n / 2; i++) {
        newArr.push(i);
        newArr.unshift(-i)
    }
    return newArr;
} */


/* const solution = (n) => {
    let newArr = [];
    let count = 0;
    for (let i = 0; i < n; i++) {
        const random = Math.floor(Math.random() * 11);
        newArr.push(random);
        for (let j = 0; j < newArr.length; j++) {
            count += newArr[j];
        }
    }
} */


const solution = (n) => {
    let newArr = [];

    // Toplamı 0 olacak şekilde diziyi oluşturmak için
    for (let i = 0; i < n - 1; i++) {
        // Elemanları -10 ile 10 arasında rastgele seç
        const random = Math.floor(Math.random() * 21) - 10;

        newArr.push(random);
    }

    // Son elemanı belirleyerek, dizinin toplamını 0 yap
    newArr.push(-newArr.reduce((acc, curr) => acc + curr, 0));

    return newArr;
}

// Oluşturulan diziyi kontrol etmek için
const result = solution(5);
console.log(result); // Örneğin: [2, -1, 3, -5, 1]
console.log(result.reduce((acc, curr) => acc + curr, 0)); // Toplamı kontrol etmek için


