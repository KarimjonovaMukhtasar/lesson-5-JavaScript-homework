/*
2. Reverse Words in a String
Given an input string, reverse the string word by word, the first word will be the last, and so on.
Function yarating u string typedagi parametrt qabul qilsin va uni teskarisiga qaytarib bersin.
Agarda son berilsa sonlarni ham tekarisiga qaytaradigan bo'lsa zo'r bo'lardi
Examples
reverseWords(" the sky is blue") ➞ "blue is sky the"
reverseWords("hello   world!  ") ➞ "world! hello"
reverseWords("a good example") ➞ "example good a"
*/
function reverseWords(str){
    arr = str.split(" ").map(item => item.trim())
    var result = []
    for (let i = arr.length; i >= 0; i--){
        result.push(arr[i])
    }
    result = String(result)
    return result
}
let input = prompt("Enter the sentence")
alert(reverseWords(input))