function generateRandom(max) {
    let arr = []
    let count = 0;
    while (count <= max) {
        let random = Math.floor(Math.random() * (max + 1));
        let isDuplicate = false;
        for (let i = 0; i < max; i++) {
            if (arr[i] === random) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            arr.push(random);
            count++;
        }

    }
    return arr;
}
console.log(generateRandom(10));