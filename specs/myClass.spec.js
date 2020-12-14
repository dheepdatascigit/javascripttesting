let MyClass = require("../src/myClass.js");
let myObj = new MyClass();
let sinon = require("sinon");
let chai = require("chai");
let expect = chai.expect;
describe("Test suit mocha", function () {
    it("Test add method", function () {
        expect(myObj.add(1,2)).to.be.equal(3);
    });

    it("Test add mothod wrong output",function () {
        expect(myObj.add(2,4)).not.to.be.equal(3);
    });
});

describe("Test suit for the spy", function () {
    it("spy the add method", function () {
        let spy = sinon.spy(myObj, "add");
        let var1 = 10, var2 = 20;
        myObj.callAnotherFn(var1, var2);

        sinon.assert.calledOnce(spy); //sinon assertion
        expect(spy.calledTwice).to.be.false; // chai assertion
        expect(spy.calledWith(2,4)).to.be.false;
    });

    it("spy the callback method", function() {
        let callback = sinon.spy();
        myObj.callTheCallback(callback);
        expect(callback.calledOnce).to.be.true;
    });
});