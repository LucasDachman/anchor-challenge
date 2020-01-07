const findChars = require('./findChars');

const str = 'If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.';

console.log(findChars(str, 50));
