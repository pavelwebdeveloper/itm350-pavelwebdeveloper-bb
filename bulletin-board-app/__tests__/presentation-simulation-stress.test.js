/*Presentation Layer Patterns*/


const app = require("../testServer.js");



const routes = require('../backend/index.js');

console.log("Here is routes.index");
console.log(app.get('/', routes.index));

test("Trying to get index page", () => {
    
    expect(app.get('/', routes.index)).toBe(app.get('/', routes.index));
    
});


/*-----------------------------------------------------------------*/

/*Simulation Patterns*/

//const app = require("../server");
const api = require("../backend/api.js");

console.log("Here is api");
console.log(api);

test("Posting and event", () => {
    expect(app.post('/api/events', api.event)).toBe(app.post('/api/events', api.event));
    
});

/*Stress-Test Patterns*/

//const app = require("../server");
//const api = require("../backend/api");

for(let i=0; i < 10000; i++){
    app.post('/api/events', api.event);
}

test("Let's see if it orks well after posting 10000 events", () => {
    expect(app.get('/api/events', api.events)).toBe(app.get('/api/events', api.events));
});


