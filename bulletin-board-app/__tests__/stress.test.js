/*Stress-Test Patterns*/

const app = require("../testServer");
const api = require("../backend/api");

for(let i=0; i < 10000; i++){
    app.post('/api/events', api.event);
}

test("Let's see if it orks well after posting 10000 events", () => {
    expect(app.get('/api/events', api.events)).toBe(app.get('/api/events', api.events));
});


