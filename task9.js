/*
9.Function yarating u array va num olsin ==(array, num)== va arraning ichida num bo'lsa true bo'lmasa false qiymat qaytarsin
check([1, 2, 3, 4, 5], 3) ➞ true
check([1, 1, 2, 1, 1], 3) ➞ false

*/
function check(arr,number){
    var result = false
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == number){
            result = true
        }
    }
    return result
}
let input = prompt("Array elementlarini probel bilan ajratib kiriting")
let arr = input.split(" ").map(item => Number(item.trim()))
let number = Number(prompt("Qidirilayotgan sonni kiriting"))
alert(check(arr,number))