const findChars = require('../index');
const { expect } = require('chai')

describe('#findChars()', function () {


    context('when the string is empty', function () {
        it('should return an empty array', function () {
            expect(findChars('', 0)).to.be.empty;
            expect(findChars('', 1)).to.be.empty;
        });
    });

    context('when no letters are unique', function () {
        it('should return an empty array unless "min" is 0', function () {
            expect(findChars('aa', 1)).to.be.empty;
            expect(findChars('aa', 0)).to.not.be.empty;
        });
    });

    context('when some letters are unique', function () {

        context('when the string length is the same as "min"', function () {
            it('should return an empty array', function () {
                expect(findChars('a', 1)).to.be.empty;
                expect(findChars('aab', 3)).to.be.empty;
                expect(findChars('abc', 3)).to.be.empty;
            });
        });

        context('when the string length is greater than "min"', function () {
            it('should return an array of at least 1', function () {
                expect(findChars('ab', 1)).to.have.lengthOf.at.least(1)
                expect(findChars('aab', 1)).to.have.lengthOf.at.least(1)
            });
        });

        context('when the string length is less than "min"', function () {
            it('should return an empty array', function () {
                expect(findChars('a', 2)).to.be.empty;
                expect(findChars('abc', 4)).to.be.empty;
            });
        });

    });

    context('manual tests', function () {

        it('should output the largest unique set of characters that can be removed from a string without letting its length drop below "min".', function () {
            expect(findChars('ab', 1)).to.deep.equal(['a']);
            expect(findChars('Hello, World!', 11)).to.deep.equal(['H', 'e']);
            expect(findChars('Hello, World!', 10)).to.deep.equal(['H', 'e', ',']);
            expect(findChars('Hello, World!', 9)).to.deep.equal(['H', 'e', ',', ' ']);
            expect(findChars('Hello, World!', 8)).to.deep.equal(['H', 'e', ',', ' ', 'W']);
            expect(findChars('Hello, World!', 7)).to.deep.equal(['H', 'e', ',', ' ', 'W', 'r']);
            expect(findChars('Hello, World!', 6)).to.deep.equal(['H', 'e', ',', ' ', 'W', 'r', 'd']);
            expect(findChars('Hello, World!', 5)).to.deep.equal(['H', 'e', ',', ' ', 'W', 'r', 'd', '!']);
            expect(findChars('Hello, World!', 4)).to.deep.equal(['H', 'e', ',', ' ', 'W', 'r', 'd', '!']);
            expect(findChars('Hello, World!', 3)).to.deep.equal(['H', 'e', ',', ' ', 'W', 'r', 'd', '!', 'o']);
            expect(findChars('Hello, World!', 2)).to.deep.equal(['H', 'e', ',', ' ', 'W', 'r', 'd', '!', 'o']);
            expect(findChars('Hello, World!', 1)).to.deep.equal(['H', 'e', ',', ' ', 'W', 'r', 'd', '!', 'o']);
            expect(findChars('Hello, World!', 0)).to.deep.equal(['H', 'e', ',', ' ', 'W', 'r', 'd', '!', 'o', 'l']);
        });
    });
});