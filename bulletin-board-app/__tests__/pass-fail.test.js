/*Pass/Fail Patterns*/

const events_json2 = require("../backend/events.js");

test("Here is the title of the event with id 1", () => {
    expect(events_json2[0].title).toBe('Docker Workshop');
});

test("Here is the title of the event with id 2", () => {
    expect(events_json2[1].title).toBe('WinOps #17');
});

test("Here is the title of the event with id 3", () => {
    expect(events_json2[2].title).toBe('Docker London');
});