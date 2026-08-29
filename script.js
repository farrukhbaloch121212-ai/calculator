const { calculateInterest } = require('../script.js');

describe("Interest Rate Calculator", function() {
    it("should calculate simple interest correctly", function() {
        // Mocking the DOM for testing
        document = {
            getElementById: function(id) {
                const values = { principal: "1000", rate: "5", time: "2" };
                return { value: values[id], innerText: "" };
            }
        };
        expect(calculateInterest()).toEqual(100);
    });

    it("should handle zero interest rate correctly", function() {
        document = {
            getElementById: function(id) {
                const values = { principal: "1000", rate: "0", time: "2" };
                return { value: values[id], innerText: "" };
            }
        };
        expect(calculateInterest()).toEqual(0);
    });
});