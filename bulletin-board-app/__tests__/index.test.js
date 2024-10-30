/*Presentation Layer Patterns*/

const app = require("../server");
var routes = require('../backend');
//const app = require("../app");

//console.log(app.get('/', routes.index));

test("Trying to get index page", () => {
    expect(app.get('/', routes.index)).toBe(app.get('/', routes.index));
});

/*-----------------------------------------------------------------*/
