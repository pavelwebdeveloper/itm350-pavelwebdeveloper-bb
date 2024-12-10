/*Collection Management Patterns*/

const events_json4 = require("../backend/events.js");

test("The first event has id 1", () => {
    expect(events_json4[0].id).toBe(1);
});

test("The second event has id 2", () => {
    expect(events_json4[1].id).toBe(2);
});

test("The third event has id 3", () => {
    expect(events_json4[2].id).toBe(3);
});
