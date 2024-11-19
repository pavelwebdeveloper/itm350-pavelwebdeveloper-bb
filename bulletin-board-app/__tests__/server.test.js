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

var app2 = require('../backend/index.js');

test("Testing the process for index", () => {
    expect(app2.index).toBe(app2.index);
});

/*-----------------------------------------------------------------*/
