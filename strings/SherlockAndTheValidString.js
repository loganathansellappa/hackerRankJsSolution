// Sherlock considers a string to be valid if all characters of the string appear the same number of times.
// It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

// Example
// s= abc
// This is a valid string because frequencies are .{a: 1, b: 1, c: 1}


// This is a valid string because we can remove one  and have  of each character in the remaining string.


// This string is not valid as we can only remove  occurrence of . That leaves character frequencies of .

// Function Description

// Complete the isValid function in the editor below.

// isValid has the following parameter(s):

// string s: a string
// Returns

// string: either YES or NO
// Input Format

// A single string .

// Constraints

// Each character 
// Sample Input 0

// aabbcd
// Sample Output 0

// NO
// Explanation 0

// Given , we would need to remove two characters, both c and d  aabb or a and b  abcd, to make it valid. We are limited to removing only one character, so  is invalid.

// Sample Input 1

// aabbccddeefghi
// Sample Output 1

// NO
// Explanation 1

// Frequency counts for the letters are as follows:

// {'a': 2, 'b': 2, 'c': 2, 'd': 2, 'e': 2, 'f': 1, 'g': 1, 'h': 1, 'i': 1}

// There are two ways to make the valid string:

// Remove  characters with a frequency of : .
// Remove  characters of frequency : .
// Neither of these is an option.

// Sample Input 2

// abcdefghhgfedecba
// Sample Output 2

// YES
// Explanation 2

// All characters occur twice except for  which occurs  times. We can delete one instance of  to have a valid string.

//URL - https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem

function isValid(s) {
    let result = {}
    for (let i = 0; i < s.length; i++) {
        result[s[i]] = result[s[i]] ? result[s[i]] + 1 : 1
    }
    const frequences = Object.values(result);
    let max = Math.max(...frequences)
    let min = Math.min(...frequences)

    if (max === min) {
        return 'YES'
    } else {
        const frequences = Object.values(result);
        let maxFrequencies = 0
        let minFrequencies = 0
        for (let i = 0; i < frequences.length; i++) {
            if (frequences[i] === max) maxFrequencies++
            if (frequences[i] === min) minFrequencies++
            if (frequences[i] !== max && frequences[i] !== min) {
                return 'NO'
            }
        }
        if (max - min !== 1) {
            if (min === 1 && minFrequencies === 1) {
                return 'YES'
            } else {
                return 'NO'
            }

        } else {
            if (maxFrequencies === 1 || minFrequencies === 1) {
                return 'YES'
            } else {
                return 'NO'
            }
        }
    }
}