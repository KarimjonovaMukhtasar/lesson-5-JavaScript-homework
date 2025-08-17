/* 3.incrementItems degan Function yarationg u array ([]) turidagi qiymat olsin va har bir elementga 1 qiymat qo'shib qaytarsin
incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]
incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

*/
function incrementItems(arr){
        for (let i = 0; i < arr.length; i++){
            arr[i] = arr[i] + 1  
        }
        return `RESULT: ${arr}`
    }
let input = prompt("Array elementlarini kiriting probel bilan ajratib")
let arr = input.split(" ").map(item => Number(item.trim()))
 alert(incrementItems(arr))