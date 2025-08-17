/* 
6.Function yarating u array qabul qilsin va arraylarning ichidagi qiymatlarning yig'indisini qaytarsin
sumArray([1, 2, 3, 4, 5]) ➞ 15

*/
function sumArray(arr){
    var sum = 0
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}
let input = prompt("Array elementlarini orasida probel bilan kiriting")
let arr = input.split(" ").map(item => Number(item.trim()))
alert(sumArray(arr))