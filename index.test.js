const { TestWatcher } = require("jest");
const answer = require("./answer");

describe("answer", function() {  
    test("Expect answer to equal 42", function() { //set description and callback
        expect(answer(42)).toEqual(42); //what you are testing
});

    test("expect answer boredom to equal code", function () { //can run another test
        expect(answer("boredom")).toEqual("code");
    });

    test("answer to stress to equal rest", function () { //can run another test
        expect(answer("stress")).toEqual("rest");
    });
});