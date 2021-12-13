

function whatToWear(eventType, temperature) {
    let attire = "";
    let coat = "";

    if (eventType === "casual") {
        attire = "something comfy";
    }
        else if (eventType === "semi-formal") {
            attire = "a polo";
        }
        else if (eventType === "formal") {
            attire = "a suit";
        }

    if (temperature < 54) {
        coat = "a coat"
    }
        else if (temperature > 54 && temperature < 70) {
        coat = "a jacket";
    }
        else if (temperature > 70) {
        coat = "no coat";
        }
   
    return `It is ${temperature} degrees outside and your event is ${eventType}, so you should wear ${attire} and ${coat}`;
}

module.exports = whatToWear;
