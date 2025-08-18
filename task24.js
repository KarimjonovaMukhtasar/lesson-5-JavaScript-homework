/*
9. Reversible Inclusive List Ranges
Write a function that, given the start and end values, returns an array containing all the numbers inclusive to that range. See examples below.
Function yarating u ==Number== typedagi 2ta parametr qabul qilsin va shu sonlar oralig'idagi sonlar bilan o'sish tartibida arrayga joylab qaytaring!.
Examples
reversibleInclusiveList(1, 5) ➞ [1, 2, 3, 4, 5]
reversibleInclusiveList(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]
reversibleInclusiveList(10, 20) ➞[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
reversibleInclusiveList(24, 17) ➞[24, 23, 22, 21, 20, 19, 18, 17]

*/
function reversibleInclusiveList(num1,num2){
    let result = []
    for (let i = num1; i <= num2; i++){
        result.push(i)
    }
    return result
}
let num1 = prompt("BOSHLANG'ICH CHEGARANI KIRITING>>>>")
let num2 = prompt("OXIRGI CHEGARANI KIRITNG")
alert(reversibleInclusiveList(num1,num2))