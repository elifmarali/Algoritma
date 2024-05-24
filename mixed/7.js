/* Odev
Bir degisken olusturun ve bu degiskende saniye degerini tutun.
Sonra bu saniye degerinin kaç dakika ve saniyeye denk geldigini yazdurin
Ornek 1200 degeri için 20 dakika x saniye yazmalidir. * / */


/* 
function calculateTimer(time) {
    let second, minute;
    second = time % 60;
    minute = time / 60;
    return `${minute} minute and ${second} seconds`
}

console.log(calculateTimer(1200));

 */


/* Odev 2
Bir degisken olusturun ve bu degiskende fahrenheit cinsinden sicakligr saklayn.
Sonrasinda bu degerin kaç Celcius oldugunu hesaplayzn.
100 degeri için 37.777778 gibi bir deger elde etmelisiniz.
HesapLama formülü: celcius = 5 / 9 * (fahrenheit - 32) */


/* function calculateCelcius(fahrenheit) {
    let celcius = 5 / 9 * (fahrenheit - 32);
    return celcius;
}

console.log(calculateCelcius(100)); */



/* Ödev 3
Bir yil degerinin artzk yul olup olmadigum hesaplayin
Bir yilin artrk olmast icin ya 400 iLe modu 0 olmali yada 4 ile modu 0 olmali ve 100 ile
modu e oLmamali
4100 false deger vermeli. */

function calculateIsYear(year) {
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(calculateIsYear(4000));