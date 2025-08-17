/*
10. Factorize a Number
Create a function that takes a number as its argument and returns an array of all its factors.
Function yarating u ==number== typedagi parametr qabul qilsin va o'sha numberga karrali bo'lgan hamma sonlarni array ichida qaytarsin.
Examples
factorize(12) ➞ [1, 2, 3, 4, 6, 12]
factorize(4) ➞ [1, 2, 4]
factorize(15) ➞ [1, 3, 5, 15]
factorize(17) ➞ [1, 17]
*/
function factorize(number){
    var result= []
    for (let i = 1; i <= number; i++){
        if (number % i == 0){
            result.push(i)
        }
    }
    return result
}
let input = Number(prompt("Enter the NUmber"))
alert(factorize(input))
