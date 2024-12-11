/*Process Patterns*/

var app2 = require('../backend/index.js');
//var api = require('../backend/api.js');
//var routes = require('../backend');

console.log("Here is the app2");
console.log(app2);

test("Testing the process for app2", () => {
    expect(app2.index).toBe(app2.index);
    //expect(api.events).toBe(api.events);
});


