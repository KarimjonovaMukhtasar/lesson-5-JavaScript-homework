/* 
LEETCODE PROBLEM 3:
2418. Sort the People
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
For each index i, names[i] and heights[i] denote the name and height of the ith person.
Return names sorted in descending order by the people's heights.
Example 1:
Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.
Example 2:
Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

*/
function sortObject(names,heights){
    let arr = names.map((name,i) => ({name: name, height: heights[i]}))
    arr.sort((a,b) => b.height - a.height)
    return arr.map(student => student.name);
}
let input = prompt("O'quvchi ismlarini kiriting")
let names = input.split(" ").map(item=> item.trim())
let inp = prompt("O'quvchi yoshlarini kiriting")
let heights = inp.split(" ").map(item=> Number(item.trim()))
console.log(sortObject(names,heights))
