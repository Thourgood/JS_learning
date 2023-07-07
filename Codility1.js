// Write a function to check string for the letter B and return the string if it isn't there
// Call that function to check if the result is the same as the string that was inputted 
// If it was, return 0
// Change the bananaRemover to check if the string contains an A, if not return the string
// Change the bananaRemover to check if the string contains an N, if not return the string
// If it finds an A, remove it and check again until it finds 3 or finds no more - if finds no more, return original string
// If it finds an N, remove it and check again until it finds 2 or finds no more - if finds no more, return original string
// If the bananaRemover finds a BANANA remove it and return the rest of the string
// Keep running the rest of the string through the bananaRemover until it does not change
// Return how many bananas found


// Write a function that takes a string arguement and removes the word banana as many times as possible then return how many bananas found.

function solution(S) {

    function bananaRemover(str) {

        if (!str.includes("B")) { // If there is no B in the string
            return str; // return the original string
        }

        let input = str; // Creating a placeholder variable so it can be changed without having to change the original input (str)

        const indexOfFirstB = str.indexOf("B"); // Find the indexOf the first B
        input = input.slice(0, indexOfFirstB) + input.slice(indexOfFirstB + 1); // Remove that B

        let aCounter = 0; // How many A's found

        while (aCounter < 3) { // While the aCounter is less than 3
            const aResult = input.indexOf("A"); // Find the indexOf the first A
            if (aResult === -1) { // If it does not find an A
                return str; // Return the original string
            }

            input = input.slice(0, aResult) + input.slice(aResult + 1); // If it does find an A, remove it 

            aCounter++; // +1 to the aCounter
        }

        let nCounter = 0; // How many N's found

        while (nCounter < 2) { // While the nCounter is less than 2
            const nResult = input.indexOf("N"); // Find the indexOf the first N
            if (nResult === -1) { // If it does not find an N
                return str; // Return the original string
            }
            input = input.slice(0, nResult) + input.slice(nResult + 1); // If it does find an N, remove it 
            nCounter++; // +1 to the nCounter
        }

        return input; // return the rest of the string
    }

    let foundBananas = 0; // How many bananas has the function found
    let result = bananaRemover(S); // Removing banana from the input string

    if (result === S) { // If the string returned is the same as the original string 
        return 0; // return 0
    }

    foundBananas++; // If the string returned is different to the original string, increase the bananaCount by 1

    while (!(result === bananaRemover(result))) { // While the result is not equal to the result after it has been through the bananaRemover

        result = bananaRemover(result); // remove a banana
        foundBananas++; // increase foundBananas by 1

    }

    return foundBananas; // return how many bananas found

}

