'use strict';
const users = require('./users')

module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define('address', {
    address: DataTypes.STRING,
    pincode: DataTypes.STRING,
    userid: DataTypes.INTEGER,
    landmark: DataTypes.STRING,
    state: DataTypes.STRING,
  }, {});
  address.associate = function(models) {
    // associations can be defined here
    address.belongsTo(models.users, {
      foreignKey: { name: 'userid', allowNull: true },
      onDelete: 'CASCADE',
    })
  };
  return address;
};