// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const candidate = sequelizeClient.define('candidate', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: false
    },  
    cpf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
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
  candidate.associate = function (models) {
    candidate.belongsTo(models.users)
    candidate.hasMany(models.subscribe)
    candidate.hasMany(models.competencia)
    candidate.hasMany(models.experience)
    candidate.hasMany(models.certificates)   
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return candidate;
};
