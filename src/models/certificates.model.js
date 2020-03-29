// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const certificates = sequelizeClient.define('certificates', {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  certificates.associate = function (models) {
    certificates.belongsTo(models.candidate)
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return certificates;
};
