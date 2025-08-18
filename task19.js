/* 4. Remove the Letters ABC
Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
Function yarating u String paramert qabul qilsin va stringnig ichidagi ==a==, ==b== va ==c== larni o'chirib o'rninga ==" "== bo'sh joy qo'ysin. Agarda a,b,c lar yo'q bo'lsa ==null== ni qaytarsin
Examples
removeABC("This might be a bit hard") ➞ "This might e  it h rd"
removeABC("hello world!") ➞ null
removeABC("") ➞ null

*/
function removeABC(str){
    arr = ['a','b','c','A','B','C']
    if (str === null || !str.includes(arr)){
        return "NULL"
    }
    else{
        str = str.replace(/[aAbBcC]/g, "  ")
        return str
    }
}
let input = prompt("Enter the sentence")
alert(removeABC(input))