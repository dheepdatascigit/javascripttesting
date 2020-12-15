class MyClass {
    constructor() {
        console.log("initiate");
    };

    sayHello(str) {
        console.log(str);
    };

    add(arg1, arg2) {
        let result = arg1 + arg2;
        return result;
    };

    callAnotherFn(arg1, arg2) {
        this.sayHello("hello world");
        this.sayHello("hello world");
        const result = this.add(arg1, arg2);
        return result;
    };

    testPromise() {
        return new Promise(function (resolve, reject){
            setTimeout(() => resolve(3), 4000);
        }).then(function(result) {
            return result * 2;
        }); // will retrun 6 after 3 seconds
    }

    callTheCallback(callback) {
        callback();
    };
};

module.exports = MyClass;