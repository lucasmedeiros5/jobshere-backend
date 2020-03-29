// Initializes the `candidate` service on path `/candidate`
const { Candidate } = require('./candidate.class');
const createModel = require('../../models/candidate.model');
const hooks = require('./candidate.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/candidate', new Candidate(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('candidate');

  service.hooks(hooks);
};
