/*
BONUS - O'z ustida ishlamoqchi bo'lganlar uchun....
IXTIYORIY
1. Array of Multiples
1. Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
Function yarating va u 2 ta number typedagi paramert olsin (num, length) va bizga length qiymati qancha bo'lsa shunga array qaytarsin birinchi bergan arrayimizga o'zini qayta qayta qo'shib
Examples
==RECURSION BILAN QILINGLAR AHLI ODAMLAR==
arrayOfMultiples(7)(5) ➞ [7, 14, 21, 28, 35]
arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
*/
function arrayofMultiples(num,length){
    let arr = []
    for (let i = 0; i < length; i++){
        arr.push(num)
        num = num + num
    }
    return arr
}

let input = Number(prompt("Enter the number"))
let limit = Number(prompt("Enter the limit"))
alert(arrayofMultiples(input,limit))
