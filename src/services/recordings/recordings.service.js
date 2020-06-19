// Initializes the `recordings` service on path `/recordings`
const { Recordings } = require('./recordings.class');
const hooks = require('./recordings.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/recordings', new Recordings(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('recordings');

  service.hooks(hooks);
};
