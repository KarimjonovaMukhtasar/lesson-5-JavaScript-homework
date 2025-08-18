/*
3. Burglary Series (01): Calculate Total Losses
You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".
Function yarating u object typedagi ma'lumot qabul qilsin va objecting parametrlarining qiymatlarni yig'indisini qaytarsin!. Agarda object bo'sh bo'lsa ==Lucky you== ni qaytarsin
Examples: const stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
} ➞ 100
const stolenItems = {
  painting: 20000,
} ➞ 20000
const stolenItems = {} ➞ "Lucky you!"
*/
function sumLoss(stolenItems){
    if (stolenItems === null){
        return "Lucky You"
    }
    else{
        let arr = Object.values(stolenItems)
        let result = arr.reduce((sum,current) => sum + current, 0);
        return result
    }
}
/*let stolenItems = {"tv"}
let input = prompt("Enter the robbed products and their costs")
stolenItems = JSON.parse(input)
*/
const stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
}
alert(sumLoss(stolenItems))