



//Restrict the code from working on other bots..

//Require ibraah server......authorised with password [carltech]
//Use a simple technique to obfuscate the codes....

function antiClone(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Example usage
const arr = [1, 2, 3, 2, 4, 5, 1];
const uniqueArr = antiClone(arr); //Input for kisii254-md uncloned version
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]

This code uses the `filter` method along with `indexOf` to filter out duplicate elements from the input array `arr`.









