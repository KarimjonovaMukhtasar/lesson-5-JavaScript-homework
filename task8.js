/* 
8.Function yarating u (num1, num2, array) qiymatlarini qabul qilsin va num1 bilan num2 oralig'idagi arrayning elementlarni qaytarsin.
arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]

*/
function arrBetween(num1,num2,arr){
    let result = []
    for (let key of arr){
        if (key > num1 && key < num2){
            result.push(key)
        }
    }
    return `Result: ${result}`
}
let input = prompt("Array elementlarini kiriting")
let arr = input.split(" ").map(item => Number(item.trim()))
let num1 = Number(prompt("Boshlang'ich chegarani kiriting"))
let num2 = Number(prompt("Oxirgi chegarani kiriting"))
alert(`Barcha elementlar: ${arr}`)
alert(arrBetween(num1,num2,arr))