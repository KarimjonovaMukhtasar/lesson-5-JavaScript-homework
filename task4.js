/* 4.Function yarating u array qabul qilsin va arrayning oxirgi qiymatini qaytarsin!.
getLastItem([1, 2, 3]) ➞ 3
*/
function getLastItem(arr){
        return `RESULT: ${arr[arr.length-1]}`
    }
let input = prompt("Array elementlarini kiriting probel bilan ajratib")
let arr = input.split(" ").map(item => Number(item.trim()))
 alert(getLastItem(arr))