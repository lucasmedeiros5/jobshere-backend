// Initializes the `proposal` service on path `/proposal`
const { Proposal } = require('./proposal.class');
const createModel = require('../../models/proposal.model');
const hooks = require('./proposal.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/proposal', new Proposal(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('proposal');

  service.hooks(hooks);

};
