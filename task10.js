/*
10.Function yarating u array qabul qilsin va array ning elementlarni typeni qaytarsin
arrayValuesTypes([1, 2, "salom") ➞ ["number", "number", "string", "object"]

*/
function arrayValues(arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
        arr[i] = JSON.parse(arr[i])
        result.push(typeof (arr[i]))
    }
    return result
}
let input = prompt("Array elementlarini orasida probel bilan kiriting")
let arr = input.split(" ").map(item=> item.trim())
alert(arrayValues(arr))