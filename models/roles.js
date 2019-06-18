'use strict';
module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define('roles', {
    role: DataTypes.STRING,
    userid: DataTypes.INTEGER,
  }, {});
  roles.associate = function(models) {
    // associations can be defined here
    roles.belongsTo(models.users, {
      foreignKey: { name: 'userid', allowNull: true },
      onDelete: 'CASCADE',
    })
  };
  return roles;
};