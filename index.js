/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */


function calculateSum(num1,num2) {
    let x = 0
    if (num1 === num2) {
        x = (num1 + num2) * 3 
    } else {
         x = num1 + num2
    }

    return x
}

console.log(calculateSum(1, 3))

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */


function checkInt(num1, num2) {
    let x = " "
    if ((num1 === 50) || (num2=== 50) || (num1 + num2 === 50)) {
        x = "true"
    } else {
        x = "false"
    }

    return x
}

console.log(checkInt(26, 25))


/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

function removeChar(position, string) {
    let x = string.slice(0, position) + string.slice(position +1)

    return x
}

console.log(removeChar(2, "Miami"))



/* 4. Create a function to find and return the largest of three given integers. */

function largestInt(int, int1, int2) {
    if ((int > int1) && (int>int2)) {
        return "The largest is: " + int
    } else if ((int1 > int) && (int1 > int2)) {
        return "The largest is: " + int1
    } else if ((int2 > int) && (int2 > int1)) {
        return "The largest is: " + int2
    } else {
        return "They are equal: " + int + ", " + int1 + ", "  + int2
    }
}

console.log(largestInt(5,2,10))


/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

function checkRange(num1, num2) {
    if (((num1 >= 40) && (num1 <= 60) || (num1 >= 70) && (num1 <= 100)) && ((num2 >= 40) && (num2 <= 60) || (num2 >= 70) && (num2 <= 100))) {
        return "true"
    } else {
        return "false"
    }
}

console.log(checkRange(80, 50))


/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

    function createComposed(string, copies) {
        let x = string

        for (let i=1; i < copies; i++) {
            x += string
        }
        return x
    }

    console.log(createComposed("X, ", 10))

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */


    function displayCity( name) {
        let x = name.substr(0,3)

        if ((x === "Los") || (x === "New")) {
            return name
        } else {
            return "false"
        }
    }

console.log(displayCity("New York"))

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */

function calculateElem(array) {

    x = 0

    for (let i = 0; i < array.length; i++) {
         x += array[i]
    }
    return x
}

console.log(calculateElem([3,2,3]))


/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */

    function arrayCont(array) {
    
            if (((array[0] === 1) || array[1] === 1) || ((array[0] === 3) || (array[1] === 3))){
                return "true"
            } else {
                return "false"
            }
    }

    console.log(arrayCont([5,1]))


/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */ 

    function arrayCont2(array) {
    
        if (((array[0] === 1) || array[1] === 1) || ((array[0] === 3) || (array[1] === 3))){
            return "false"
        } else {
            return "true"
        }
}

console.log(arrayCont2([5,1]))


/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */ 


    function longestString(array) {

        let x = "a"
        for (let i = 0; i < array.length; i++) {
            if (x.length < array[i].length) {
                x = array[i]
            } 
        }

        return x
    }

    console.log(longestString(["Barcelona", "bar", "Current", "milan", "Miami"]))

/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/


/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */


/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */


/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */


/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */


/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */


/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */