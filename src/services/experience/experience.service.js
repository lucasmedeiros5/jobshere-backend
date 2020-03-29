// Initializes the `experience` service on path `/experience`
const { Experience } = require('./experience.class');
const createModel = require('../../models/experience.model');
const hooks = require('./experience.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/experience', new Experience(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('experience');

  service.hooks(hooks);
};
