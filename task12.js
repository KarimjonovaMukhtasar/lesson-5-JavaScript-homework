/*
12.Berilgan qator ichidagi barcha bo'shliqlarni olib tashlang.
function removeSpaces(str) {
    // Code here
}
console.log(removeSpaces("Hello World! How are you?")); // "HelloWorld!Howareyou?"
*/
function removeSpaces(str) {
    let result = str.replace(/\s+/g, ""); 
    return result;
}
let str = prompt("Satrni kiriting")
alert(removeSpaces(str))
