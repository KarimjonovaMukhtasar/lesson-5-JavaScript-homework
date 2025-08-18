/* 
8. Multiplying Numbers in a String
Given a string of numbers separated by a comma and space, return the product of the numbers.
Function yarating u ==String== typedagi numberlar qabul qilsin uni har birini bir biriga ko'paytmasini qiymatini toping!.
Examples
multiplyNums("2, 3") ➞ 6
multiplyNums("1, 2, 3, 4") ➞ 24
multiplyNums("54, 75, 453, 0") ➞ 0
multiplyNums("10, -2") ➞ -20
*/
function multiplyNums(str){
    let sum = 1
    for (let i = 0; i < str.length; i++){
        sum = sum * (str[i])
    }
    return sum
}
let str = prompt("Sonlarni probel bilan ajratib kiriting>>> ")
str = str.split(" ").map(item => Number(item.trim()))
alert(multiplyNums(str))