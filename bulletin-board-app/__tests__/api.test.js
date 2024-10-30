/*Data Transaction Patterns*/

var events = require('../backend/api');

console.log("Here are all the events");
console.log(events.events());

test("Trying to see all the events", () => {
    expect(events.events()).toBe([
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