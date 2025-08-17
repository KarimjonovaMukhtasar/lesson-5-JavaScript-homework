/*
5. Capitalize the Names
Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.
Function yarating u Array typedagi qiymatni qabul qilsin va arraydagi hamma elementlarning birinchi harifini katta harfga o'zgartirsin!.
Examples
capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]
capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]

*/
function CapitalizeName(arr){
    var result = []
    for (let key of arr){
        key = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()
        result.push(key)
    }
    return result
}
let input = prompt("Enter the names")
let arr = input.split(" ").map(item => item.trim())
alert(CapitalizeName(arr))