require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('kaj2384y328492')
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });