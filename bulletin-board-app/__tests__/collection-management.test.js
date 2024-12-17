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

test("The first event has title Docker Workshop", () => {
    expect(events_json4[0].title).toBe('Docker Workshop');
});

test("The second event has title WinOps #17", () => {
    expect(events_json4[1].title).toBe('WinOps #17');
});

test("The third event has title Docker London", () => {
    expect(events_json4[2].title).toBe('Docker London');
});

