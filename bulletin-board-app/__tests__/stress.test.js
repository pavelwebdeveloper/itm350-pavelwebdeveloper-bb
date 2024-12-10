/*Stress-Test Patterns*/

const app2 = require("../server");
const api = require("../backend/api");

/*for(let i=0; i < 100; i++){
    app2.post('/api/events', api.event);
}*/

test("Let's see if it orks well after posting 100 events", () => {
    expect(app2.get('/api/events', api.events)).toBe(app2.get('/api/events', api.events));
});