const users = require('./users/users.service.js');
const candidate = require('./candidate/candidate.service.js');
const company = require('./company/company.service.js');
const proposal = require('./proposal/proposal.service.js');
const register = require('./register/register.service.js');
const competencia = require('./competencia/competencia.service.js');
const experience = require('./experience/experience.service.js');
const certificates = require('./certificates/certificates.service.js');
const subscribe = require('./subscribe/subscribe.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(candidate);
  app.configure(company);
  app.configure(proposal);
  app.configure(register);
  app.configure(competencia);
  app.configure(experience);
  app.configure(certificates);
  app.configure(subscribe);
};
