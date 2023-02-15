const chalk = require('chalk');
const yargs = require('yargs');

// Customize yargs version
yargs.version('1.1.0');

// Challenge: Add an option to yargs
//
// 1. Setup a body option for add command
// 2. Configure a description, make it required, and for it to be a string
// 3. Log the body value in the handler function
// 4. Test your work!

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note');
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Read the note');
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: function () {
    console.log('List the notes');
  },
});

//add, remove, read, list

console.log(yargs.argv);
yargs.parse;
