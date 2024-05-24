/*Longest word
    - Using the JavaScript language, have the function LongestWord(sen)
take the sen parameter being passed and return the largest word in the string
    - If there are two on more words that are the same length, return the
first word from the string with that length.
    - Ignore punctuation and assume sen will not be empty.
    Verilen parametredeki cumle org=neginden noktalama isaretleri cikarilir ve en uzun kelime dondurulur.

*/

export const LongestWord = (sen) => {

    const arr = sen.replace(/[^A-Za-z ]/g, "").split(" ");
    arr.sort((a, b) => b.length - a.length)
    //noktalama isaretlerini kaldir
    //cumleyi bosluklaradn bol ve kelimelerden bir array olustur
    //olustutuealn array i azalana gore sirala
    //0. indexteki kelime return edilir

    return arr[0];
}