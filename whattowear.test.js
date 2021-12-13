const whatToWear = require("./whattowear");

describe("whatToWear", function() { 

    test("if casual and 50 wear something comfy and a coat", function() {
        expect(whatToWear("casual", 50)).toEqual("It is 50 degrees outside and your event is casual, so you should wear something comfy and a coat");
    });
    test("if semi-formal and 65 wear a polo and a jacket", function() {
        expect(whatToWear("semi-formal", 65)).toEqual("It is 65 degrees outside and your event is semi-formal, so you should wear a polo and a jacket");
    });
    test("if formal and 80 wear a suit and no coat", function() {
        expect(whatToWear("formal", 80)).toEqual("It is 80 degrees outside and your event is formal, so you should wear a suit and no coat");
    });
    test("if formal and 50 wear a suit and coat", function() {
        expect(whatToWear("formal", 50)).toEqual("It is 50 degrees outside and your event is formal, so you should wear a suit and a coat");
    });
    test("if casual and 95 wear something comfy and no coat", function() {
        expect(whatToWear("casual", 95)).toEqual("It is 95 degrees outside and your event is casual, so you should wear something comfy and no coat");
    });
});