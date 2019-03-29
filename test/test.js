const assert = require('assert');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const Books = require('../models/books');

describe('sanity check', () => {
    it('should be 2', () => {
        assert.equal(2, 1 + 1);
        expect(1 + 1).to.equal(2);
    });
});

describe('books model', () => {
    it('should retieve book by id', async () => {
        const bookData = await Books.getById(4);
        console.log(bookData);
        expect(bookData).to.be.an.instanceOf(Books);
    });
    it('should be able to retrieve a book\'s author by id', async() => {
        const bookAuthor = await Books.getById(3);
        console.log(bookAuthor.author);
        expect(bookAuthor.author).to.equal('Francisco Cantu')
    });
    it('should be able to retrieve all books', async () => {
        const allBooks = await Books.getAll();
        expect(allBooks).to.be.an.instanceOf(Array);
    })
})