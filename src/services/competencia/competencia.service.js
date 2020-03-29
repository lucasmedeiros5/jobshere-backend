// Initializes the `competencia` service on path `/competencia`
const { Competencia } = require('./competencia.class');
const createModel = require('../../models/competencia.model');
const hooks = require('./competencia.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/competencia', new Competencia(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('competencia');

  service.hooks(hooks);
};
