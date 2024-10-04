const events = require("../backend/events");

//require("../backend/api.js");

console.log(events.length);

test("there are three events", () => {
    expect(events.length).toBe(3);
});