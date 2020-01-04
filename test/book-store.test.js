const expect = require("chai").expect;
const {describe} = require("mocha");
const BookStore = require('../JS Advanced Retake - 18 April 2019/02. Book Store');


describe("BookStore tests", function () {
    let store;
    beforeEach(function () {
        store = new BookStore('SoftUni')
    });

    describe('Test constructor', function () {
        it('should initializes properties correctly', function () {
            expect(store.name).to.equal('SoftUni');
            expect(store.books).to.deep.equal([]);
            expect(store.workers).to.deep.equal([]);
        });
    });

});
