class MyClass {
    constructor() {
        console.log("initiate");
    }

    add(arg1, arg2) {
        let result = arg1 + arg2;
        return result;
    }
}

module.exports = MyClass;