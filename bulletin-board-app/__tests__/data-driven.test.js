/*Data Driven Test Patterns*/

const events_json3 = require("../backend/events.js");

//const date_in_msec = Date.parse(events_json[0].date);

//console.log(date_in_msec);

test("Here is the date in milliseconds of the event with id 1", () => {
    expect(Date.parse(events_json3[0].date)).toBe(1511222400000);
});