const users = require('./users/users.service.js');
const recordings = require('./recordings/recordings.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(recordings);
};
