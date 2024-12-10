/*Performance Patterns*/

const app = require("../server");

var timeBefore = new Date();
var timeBefore_ms = timeBefore.getMilliseconds();
app;
var timeAfter = new Date();
var timeAfter_ms = timeAfter.getMilliseconds();
var the_time_of_loading_the_app = timeAfter_ms - timeBefore_ms;
console.log('***************************');
console.log(timeBefore_ms);
console.log(timeAfter_ms);
console.log(the_time_of_loading_the_app);
console.log('*******************************');


test("Testing the time of loading the app", () => {
   
    expect(the_time_of_loading_the_app).toBe(2);
});


/*-----------------------------------------------------------------*/

/*Process Patterns*/

//var app2 = require('../backend/index.js');
//var api = require('../backend/api.js');
/*var routes = require('../backend');

console.log("Here is the app2");
console.log(app);

test("Testing the process for app2", () => {
    expect(app.get('/', routes.index)).toBe(app.get('/', routes.index));
    //expect(api.events).toBe(api.events);
});

/*-----------------------------------------------------------------*/
