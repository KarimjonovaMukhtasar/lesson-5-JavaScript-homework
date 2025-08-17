/*
7.Function yarating u number qabul qilsin va object qaytarsin Ilm uchun 50% qismini ajratsin Harajatlar uchun 30% qismini ajratsin kelajak uchun 20% qismini ajratsin
fiftyThirtyTwenty(10000) ➞ { "ilm": 5000, "harajat": 3000, "kelajak": 2000 }

*/
function fiftyThirtyTwenty(salary){
    let obj = {};
    obj.ilm = (salary * 50)/100;
    obj.xarajat = (salary * 30)/100;
    obj.kelajak = (salary * 20)/100;
    return obj
}
let salary = Number(prompt("Enter the total salary"))
console.log(fiftyThirtyTwenty(salary))
