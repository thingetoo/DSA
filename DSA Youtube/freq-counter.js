// write a function called same which accepts two arrays. The funtion should return true if eevery value in the array has it's corresponding value squared in the second array - freq of values must be the same

// restate - given two arrays - return whether the second array contains all the values of the first squared. the number of elements must match

// i & o - inputs are two arrays and the output is a bool 

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    const hash = {};

    for (let i = 0; i < arr1.length; i++) {
        const square = arr1[i] * arr1[i]; 
        if (hash[square]) {
            hash[square]++;
        } else {
            hash[square] = 1;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        const value = arr2[i]

        if (!hash[value]) {
            return false;
        } else {
            if (hash[value] > 1) {
                hash[value]--
            } else {
                delete hash[value]
            }
        }
    }

    if (Object.entries(hash) > 0) {
        return false;
    }

    return true;
}

// console.log(same([1, 2, 3], [4, 1, 9]))
// console.log(same([1, 2, 3], [4, 9]))
// console.log(same([1, 2, 1], [4, 4, 1 ]))

////////////////////////////////////////////////////////////////////////

// Given two strings, write a function to determine if the second string is an anagram of the first

// restate - we get two strings, we want to see if the first string has the exact same letters and frequency of letters as the second string

// i & o: our inputs are two strings and our output is a bool

function validAnagram(str1, str2) {
    // if the strings are not equal in length return false
    if (str1.length !== str2.length) {
        return false;
    }
    // create a hash
    const hash = {};
    // loop over str1
    for (let i = 0; i < str1.length; i++) {
        // if the letter does not exist, add it to the hash map
        if (!hash[str1[i]]) {
            hash[str1[i]] = 1;
        // else increment the letter by 1
        } else {
            hash[str1[i]]++;
        }
    }

    // loop over string 2
    for (let i = 0; i < str2.length; i++) {
        const letter = str2[i];
        // if letter does not exist in hash map
        if (!hash[letter]){
            // return false
            return false;
        }
        // else
        else {
            // if it has a frequency greater than 1
            if (hash[letter] > 1) {
                // subtract it by 1
                hash[letter]--;
            }
            // else
            else {
                // delete entry from hashmap
                delete hash[letter]
            }
            }
    }  
    // if the hash map has entries
    if (Object.entries(hash).length > 0) {
        // return false
        return false
    }
    // return true
    return true;
}

console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('rat', 'car'))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('qwerty', 'qeywrt'))
console.log(validAnagram('texttwisttime', 'timetwisttext'))