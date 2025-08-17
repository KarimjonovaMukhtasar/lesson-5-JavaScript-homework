/* 
2.Function yarating array turidagi paramert olsin va faqat arrayning juft qiymatlarni yig'ib qaytarsin.
getEvenValue([1, 2, 3,6]) ➞ [2,6]

*/
function getEvenValue(arr){
        let result = [] 
        for (let i = 0; i < arr.length; i++){
            if (arr[i] % 2 == 0){
                result.push(arr[i])
            }
        }
        alert(`Barcha Array elementlari: ${arr}`)
        return `RESULT: ${result}`
    }
let arr = []
let input = parseInt(prompt("Nechta array elementini kiritmoqchisiz"))
for (let x = 0; x < input; x++){
    let i = prompt(`${x+1}-Elementni kiriting`)
    arr.push(i)
}
alert(getEvenValue(arr))