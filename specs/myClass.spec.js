let MyClass = require("../src/myClass.js");
let myObj = new MyClass();
let chai = require("chai");
let expect = chai.expect;
describe("Test suit", function () {
    it("Test add method", function () {
        expect(myObj.add(1,2)).to.be.equal(3);
    })

    it("Test add mothod wrong output",function () {
        expect(myObj.add(2,4)).not.to.be.equal(3);
    })
});