'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};