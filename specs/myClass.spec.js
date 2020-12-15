let MyClass = require("../src/myClass.js");
let myObj = new MyClass();
let sinon = require("sinon");
let chai = require("chai");
let expect = chai.expect;
describe.skip("Test suit mocha", function () {
    it("Test add method", function () {
        expect(myObj.add(1,2)).to.be.equal(3);
    });

    it("Test add mothod wrong output",function () {
        expect(myObj.add(2,4)).not.to.be.equal(3);
    });
});

describe.skip("Test suit for the spy", function () {
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

    it("mock the sayHellow method", function() {
        let mock = sinon.mock(myObj);
        let expectation = mock.expects("sayHello"); //function name we are mocking
        expectation.exactly(2);
        expectation.withArgs("hello world")
        myObj.callAnotherFn(10, 20);
        //expect(callback.calledOnce).to.be.true;
        mock.verify();
    });
});

describe.skip("Test suit for stub", function() {
  it("Stub the add method", function() {
      let stub = sinon.stub(myObj, "add"); //function to be stubbed
      stub
        .withArgs(10,20)
        .onFirstCall()
        .returns(100)
        .onSecondCall()
        .returns(200);
      expect(myObj.callAnotherFn(10, 20)).to.be.equal(100);
      expect(myObj.callAnotherFn(10, 20)).to.be.equal(200);
  });
});

describe("Test the promise", function() {
    it("Promise test case", function(done) {
        this.timeout(5000);
        myObj.testPromise().then(function(result) {
            expect(result).to.be.equal(6);
            expect(false).to.be.false;
            done();
        });
    });
});