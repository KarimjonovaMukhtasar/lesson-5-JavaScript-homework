/*
1.Funksiya yarating u array olsin va arrayning birinchi elementini( 0 indexda turganini ) qaytarsin
Examples
getFirstValue([1, 2, 3]) ➞ 1
getFirstValue([80, 5, 100]) ➞ 80
getFirstValue([-500, 0, 50]) ➞ -500

*/
function getFirstValue(arr){
        return `BARCHA ARRAY ELEMENTLARI:${arr} RESULT: ${arr[0]}`
    }
let arr = []
let input = parseInt(prompt("Nechta array elementini kiritmoqchisiz"))
for (let x = 0; x < input; x++){
    let i = prompt(`${x+1}-Elementni kiriting`)
    arr.push(i)
}
console.log(arr)
alert(getFirstValue(arr))