/*Simulation Patterns*/
const app = require("../testServer.js");

//const app = require("../server");
const api = require("../backend/api.js");

console.log("Here is api");
console.log(api);

test("Posting and event", () => {
    expect(app.post('/api/events', api.event)).toBe(app.post('/api/events', api.event));
    
});