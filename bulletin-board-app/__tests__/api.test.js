/*Data Transaction Patterns*/

//var events = require('../backend/api');
var events = require('../backend/events.js');

console.log("Here are all the events");
console.log(events);

test("Trying to see all the events", () => {
    expect(events).toStrictEqual([
      {
          id: 1,
          title: 'Docker Workshop',
          detail: 'Linuxing in London ',
          date: '2017-11-21'
        },
        {
          id: 2,
          title: 'WinOps #17',
          detail: 'WinOps London',
          date: '2017-11-21'
        },
        {
          id: 3,
          title: 'Docker London',
          date: '2017-11-13'
        }
      ]);
});

/*-----------------------------------------------------------------*/