// You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// Example
// s= AABAAB

// Remove an  A at positions 0 and 3 to make s = ABAB in 2 deletions.

// Function Description

// Complete the alternatingCharacters function in the editor below.

// alternatingCharacters has the following parameter(s):

// string s: a string
// Returns

// int: the minimum number of deletions required
// Input Format

// The first line contains an integer q, the number of queries.
// The next q lines each contain a string  to analyze.

// Constraints

// Each string  will consist only of characters  and .
// Sample Input

// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB
// Sample Output

// 3
// 4
// 0
// 0
// 4
// Explanation

// The characters marked red are the ones that can be deleted so that the string does not have matching adjacent characters.



/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternatingCharacters(s) {
    let previousString;
    let deletion = 0
    for(let i=0; i < s.length; i++) {
        if(previousString && s.charCodeAt(i) === previousString) { deletion++ } 
        previousString = s.charCodeAt(i)
    }
    return deletion;
}