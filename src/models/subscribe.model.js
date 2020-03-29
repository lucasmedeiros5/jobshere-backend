// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const subscribe = sequelizeClient.define('subscribe', {
    text: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  subscribe.associate = function (models) {
    // Define associations here
    subscribe.belongsTo(models.candidate)
    subscribe.belongsTo(models.proposal)
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return subscribe;
};
