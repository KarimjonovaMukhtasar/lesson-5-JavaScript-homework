/* LEETCODE PROBLEM 1:
Leetcode - Must have!
599. Minimum Index Sum of Two Lists
Given two arrays of strings list1 and list2, find the common strings with the least index sum.
A common string is a string that appeared in both list1 and list2.
A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.
Return all the common strings with the least index sum. Return the answer in any order.
Example 1:
Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"] 
Explanation: The only common string is "Shogun".
Example 2:
Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
Output: ["Shogun"]
Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.
Example 3:
Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
Output: ["sad","happy"]
Explanation: There are three common strings:
"happy" with index sum = (0 + 1) = 1.
"sad" with index sum = (1 + 0) = 1.
"good" with index sum = (2 + 2) = 4.
The strings with the least index sum are "sad" and "happy".
*/
function common(list1,list2){
    var  common = []
    var min = Infinity
    for (let i = 0; i < list1.length; i++){
        for (let j = 0; j < list2.length; j++){
            if(list1[i] === list2[j]){
                let sum =  i + j
                if (sum < min){
                    min = sum
                    common.push(list1[i]);
                }
                else if(sum === min){
                    common.push(list1[i])
                }
            }
        }
    }
    return common
}
let l1 = prompt("List 1 elementlarini probel bilan kiriting")
let arr1 = l1.split(" ").map(item => item.trim())
let l2 = prompt("List 2 elementlarini probel bilan kiriting")
let arr2 = l2.split(" ").map(item => item.trim())
alert(common(arr1,arr2))