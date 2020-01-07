/*
    If you want to jumpstart the process of talking to us about this role, here’s a little challenge: 
    write a program that outputs the largest unique set of characters that can be removed from this 
    paragraph without letting its length drop below 50.
    For example: [‘H’, ‘i’, ‘!’, ‘ ’]
*/

/*
    - create array of chars
    - get counts of each
    - sort counts
    - for each in list
        - find (total - count)
        - if greater/equal to 50
            - add char to list
            - set total
*/

// Is it cheating to use lodash?
const _ = require('lodash');

module.exports = function findChars(str, min) {

    const chars = str.split('');

    // create a list of objects that look like { char: 'a', count: 1 }, sorted by count
    const counts = _
        .chain(chars)
        .countBy()
        .toPairs()
        .map(([key, value]) => ({ char: key, count: value }))
        .sortBy('count')
        .value();

    let total = chars.length;
    const result = counts.map(({ char, count }) => {
        // return the char every time the new total is not less than min
        if (total - count >= min) {
            total -= count;
            return char;
        }
    }).filter(value => value !== undefined);

    return result;
}
