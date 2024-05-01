/* 3.
Math.random() ile rastgele sayz üretebilirsiniz.Bu fonksiyon 0 dahil - 1 haric
bir deger retir mesela 0.56 gibi.Sonrasinda bu ifadenin sonucunu istediginiz
araligan üst sinirlyla carparsaniz verilen aralikta deger üretmis olursunuz.
    Mesela 0 ile 10 arasinda bir sayz için(Math.random() * 10) + 1 size 1 ile 10
arasinda ki
10 da dahil sayz retmis olur.
Üretilen bu say ondalikli olabilir bunu tam sayzya dönüstürmek için Math.floor()
kullanabilirsiniz.
Küçük bir piyango oyunu tasarlayzniz. Sistem iki basamakla bir say üretmeli.
Kullanicidan da bu sayzy tahmin etmesini istem ';' expected. ts (1005)
Peek Problem
No quick fixes available
Eger kullanici sayzy tam olarak dogru bilirse 10000 TL;
Eger kullanici sayinin basamaklarin bilirse yani 65 yerine
56 yazmissa 5000TL
Eger kullanic sansl1 numarain sadece bir basamagina bilirse 1000
TL
kazanir.*/
const random = Math.floor((Math.random() * 90) + 10);
console.log(random);
function numberGame(game) {
    const randomOne = Math.floor(random / 10);
    const randomTwo = random % 10;
    let total = 0;
    if (random == game) {
        total = 10000;
    } else if (randomOne === game % 10 && randomTwo === Math.floor(game / 10)) {
        total = 5000;
    } else if (randomOne === Math.floor(game % 10) || randomOne === Math.floor(game / 10) || randomTwo === Math.floor(game / 10) || randomTwo === Math.floor(game % 10)) {
        total = 1000;
    } else {
        total = 0;
    }
    return total;
}

let game = parseInt(prompt("Sayi giriniz"));
console.log(numberGame(game));