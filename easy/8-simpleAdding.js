// Verilecek olan tamsayiya kadar olan
// degerlerin toplanmasi(verilen sayi
// dahi)


function simpleAdding(number) {
    let result = 0;
    if (number > 0) {
        for (let i = 1; i <= number; i++) {
            result += i;
        }
    }
    return result;
}


export default simpleAdding;