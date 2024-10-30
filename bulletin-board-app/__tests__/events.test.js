/*Initial general test*/

const events_json = require("../backend/events");

test("there are three events", () => {
    expect(events_json.length).toBe(3);
});

/*-----------------------------------------------------------------*/


/*Pass/Fail Patterns*/

const events_json = require("../backend/events");

test("Here is the title of the event with id 1", () => {
    expect(events_json[0].title).toBe('Docker Workshop');
});

test("Here is the title of the event with id 2", () => {
    expect(events_json[1].title).toBe('WinOps #17');
});

test("Here is the title of the event with id 3", () => {
    expect(events_json[2].title).toBe('Docker London');
});


/*-----------------------------------------------------------------*/

/*Data Driven Test Patterns*/

const events_json = require("../backend/events");

//const date_in_msec = Date.parse(events_json[0].date);

//console.log(date_in_msec);

test("Here is the date in milliseconds of the event with id 1", () => {
    expect(Date.parse(events_json[0].date)).toBe(1511222400000);
});

/*-----------------------------------------------------------------*/

/*Data Transaction Patterns*/

// in api.test.js

/*-----------------------------------------------------------------*/

/*Collection Management Patterns*/

const events_json = require("../backend/events");

test("The first event has id 1", () => {
    expect(events_json[0].id).toBe(1);
});

test("The second event has id 2", () => {
    expect(events_json[1].id).toBe(2);
});

test("The third event has id 3", () => {
    expect(events_json[2].id).toBe(3);
});

/*-----------------------------------------------------------------*/

/*Performance Patterns*/

// in server.test.js

/*-----------------------------------------------------------------*/

/*Process Patterns*/

// in server.test.js

/*-----------------------------------------------------------------*/

/*Simulation Patterns*/

const app = require("../server");



test("Posting and event", () => {
    expect(app.post('/api/events', api.event)).toBe(app.post('/api/events', api.event));
});

/*-----------------------------------------------------------------*/

/*Multithreading Patterns*/



/*-----------------------------------------------------------------*/

/*Stress-Test Patterns*/

const app = require("../server");

for(let i=0; i < 1000000; i++){
    app.post('/api/events', api.event);
}

test("Let's see if it orks well after posting 1000000 events", () => {
    expect(app.get('/api/events', api.events)).toBe(app.get('/api/events', api.events));
});



/*-----------------------------------------------------------------*/


/*Presentation Layer Patterns*/

// in index.test.js

/*-----------------------------------------------------------------*/



