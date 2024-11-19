/*Presentation Layer Patterns*/


const app = require("../server");
const index = require('../backend');
//const app = require("../app");

//console.log(app.get('/', routes.index));

test("Trying to get index page", () => {
    expect(app.get('/', index)).toBe(app.get('/', index));
});

/*-----------------------------------------------------------------*/
