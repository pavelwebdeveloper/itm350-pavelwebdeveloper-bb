/*Presentation Layer Patterns*/


const app = require("../testServer.js");

const routes = require('../backend/index.js');

console.log("Here is routes.index");
console.log(app.get('/', routes.index));

test("Trying to get index page", () => {
    
    expect(app.get('/', routes.index)).toBe(app.get('/', routes.index));
    
});


/*-----------------------------------------------------------------*/

