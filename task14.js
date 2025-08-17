/* 
LEETCODE PROBLEM 2:
819. Most Common Word
Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.
The words in paragraph are case-insensitive and the answer should be returned in lowercase.
Note that words can not contain punctuation symbols.
Example 1:
Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
Example 2:
Input: paragraph = "a.", banned = []
Output: "a"
*/
function frequent(list1,list2){
    list1 = list1.toLowerCase().replace(/[^a-z\s]/g," ")
    list1 = list1.split(/\s+/)
    let quantity = {}
    for(let word of list1){
            if(word && !list2.includes(word)){
                quantity[word] = (quantity[word] || 0) + 1
               }
            }
    let frequent = ""
    let count = 0
    for (let word in quantity){
        if (quantity[word] > count){
            count = quantity[word]
            frequent = word
        }
    }
    return frequent
}
let l1 = prompt("So'zlarni probel bilan ajratib kiriting")
let l2 = prompt("Taqiqlangan so'zlarni probel bilan ajratib kiriting")
alert(frequent(l1,l2))