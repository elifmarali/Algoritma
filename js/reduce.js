const numbers = [1, 2, 3, 5];
// bu dizideki her bir elemani toplayip tek bir sonuc olarak yazdirmak istedigimizde reduce kullanilir
//reduce kucultmek anlamina gelir ve diziyi bir sonuca indirger

//reduce kullanmadan da bu dizideki elemeanlari toplayabiliriz
/* let total = 0;
numbers.forEach((number) => total += number); */
// console.log(total);

//reduce metoduyla
//acumulator toplayici anlamina gelir, yukarida kullandigimiz total degiskeni yerine burada accumulator ayni islevi gorur
//item ise dizideki her bir degeri ifade eder

/* let total2 = numbers.reduce((accumulator, item) => accumulator + item
    , 5)
console.log(total2); */
// ucuncu parametre olarak bir baslangic degeri verebiliriz

/* const basket = [
    { name: "Iphone 8", price: 7000 },
    { name: "Iphone 9", price: 8000 },
    { name: "Iphone 10", price: 10000 }
]

let sum = basket.reduce((acc, item) => acc + item.price, 0)
console.log(sum); */


/* const names = ["Elif", "Yunus", "Emre", "Elif", "Emre"];
const objNames = names.reduce((allNames, name) => {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {})
console.log(objNames); */

const products = [
    {
        name: "NT1-1 Condanser Mikrofon",
        brand: "Rode"
    },
    {
        name: "Iphone XS",
        brand: "Apple"
    },
    {
        name: "SmartLav Plus+ Yaka Mikrofonu",
        brand: "Rode"
    },
    {
        name: "M-Audio Keystation 61",
        brand: "M-Audio"
    }
]
let group = "brand";
let groupProduct = products.reduce((acc, product) => {
    let key = product[group];
    if (!acc[key]) {
        acc[key] = []
    }
    acc[key].push(product)
    return acc
}, [])
console.log(groupProduct);