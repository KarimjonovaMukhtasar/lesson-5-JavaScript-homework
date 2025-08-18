/*
7. Double Factorial
Create a function that takes a number num and returns its double factorial.
Function yarating u ==number== typedagi paramerater qabul qilsin uni faqat ==toq numberlar==ning ko'paytmasini recursion bilan qiling
Examples
doubleFactorial(0) ➞ 1
doubleFactorial(2) ➞ 2
doubleFactorial(9) ➞ 945
// 9*7*5*3*1 = 945
doubleFactorial(14) ➞ 645120

*/
function doubleFactorial(number, i=1, sum = 1){
    if( i > number){
        return sum
    }
    else{
        sum = sum * i 
        return doubleFactorial(number, i+=2,sum )
    }
}
let input = Number(prompt("Sonni kiriting>>>> "))
alert(doubleFactorial(input))