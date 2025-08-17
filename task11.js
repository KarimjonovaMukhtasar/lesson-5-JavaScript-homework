/*
11.Berilgan massivdagi juft va toq indekslardagi elementlarning yig'indisini alohida-alohida hisoblang.
function evenOddIndexSums(arr) {
// Code here
}
console.log(evenOddIndexSums([1, 2, 3, 4, 5, 6])); // {evenIndexSum: 9, oddIndexSum: 12}
*/

function evenOddIndexSums(arr){
    let odd = 0
    let even = 0
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            even = even + arr[i]
        }
        else{
            odd = odd + arr[i]
        }
    }
    return `evenIndexSum: ${even}, oddIndexSum: ${odd}`
}
let input = prompt("Massiv elementlarini orasida probel bilan kiriting")
let arr = input.split(" ").map(item=> Number(item.trim()))
alert(evenOddIndexSums(arr))