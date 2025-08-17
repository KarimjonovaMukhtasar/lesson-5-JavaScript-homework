/* 
5.Function yarating u array va son oldin, bizga sonning indexni qaytarsin agarda u bo'lsa yoki u yo'q bo'lsa -1 qaytarsin
search([1, 5, 3], 5) ➞ 1
search([1, 2, 3], 4) ➞ -1

*/
function search(arr,number){
    var result = -1
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == number){
            result = i
        }
    }
    return result
}
let input = prompt("Array elementlarini probel bilan ajratib kiriting")
let arr = input.split(" ").map(item => Number(item.trim()))
let number = Number(prompt("Qidirilayotgan sonni kiriting"))
alert(search(arr,number))