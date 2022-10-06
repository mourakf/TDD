const reverseString = (input) => {
    let reverse = ""


    for (let cont = input.length - 1; cont >= 0; cont--) {
        let char = input[cont]
        reverse += char
    }
    return reverse

};

module.exports = reverseString