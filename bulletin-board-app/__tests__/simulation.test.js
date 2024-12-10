/*Simulation Patterns*/

const app = require("../server");
const api = require("../backend/api.js");


test("Posting and event", () => {
    expect(app.post('/api/events', api.event)).toBe(app.post('/api/events', api.event));
});