let MyClass = require("./src/myclass.js.js");
let myObj = new MyClass();
let chai = require("chai");
let expect = chai.expect;
describe("Test suit", function () {
    it("Test add method", function () {
        expect(myObj.add(1,2)).to.be.equal(3);
    })
});