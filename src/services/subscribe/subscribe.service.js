// Initializes the `subscribe` service on path `/subscribe`
const { Subscribe } = require('./subscribe.class');
const createModel = require('../../models/subscribe.model');
const hooks = require('./subscribe.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/subscribe', new Subscribe(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('subscribe');

  service.hooks(hooks);
};
