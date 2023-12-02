const fs = require('fs')
const path = require('path')

/**
 * 
 * @param {string} code 
 * @returns {number}
 */
function decoder(code) {
    let firstDigit = 0;
    let secondDigit = 0;
    let i = 0;

    while (i < code.length) {
        const possibleNum = parseInt(code[i]);
        if (!isNaN(possibleNum)) {
            firstDigit = code[i];
            break;
        }
        i++;
    }
    let j = code.length-1;
    while (j >= 0) {
        const possibleNum = parseInt(code[j]);
        if (!isNaN(possibleNum)) {
            secondDigit = code[j];
            break;
        }
        j--;
    }
    return parseInt(`${firstDigit}${secondDigit}`)
}

function storeCodeToArr(filePath, callback) {
    // Read the content of the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            callback(err, null);
            return;
        }

        // Split the content into an array of words based on newlines
        const wordsArray = data.split('\n').map(word => word.trim());

        callback(null, wordsArray);
    });
}

const filePath = path.join(__dirname, '/day_1.txt');

storeCodeToArr(filePath, (err, wordsArr) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    const result = wordsArr;
    let total = 0;
    for (let i = 0 ; i < result.length; i++) {
        total+=decoder(result[i])
    }
    console.log(total)
});

